import { ButtonHTMLAttributes, forwardRef, memo, ReactNode } from "react";

export interface BaseButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	color?: ButtonColor;
	size?: ButtonSize;
	isLoading?: boolean;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	className?: string;
}

export type ButtonSize = "sm" | "md" | "lg" | "full" | "icon";

export type ButtonVariant = "filled" | "text" | "icon";

export type ButtonColor =
	| "primary"
	| "primary-500"
	| "primary-400"
	| "icon"
	| "gray"
	| "white";

const BaseButton = memo(
	forwardRef<HTMLButtonElement, BaseButtonProps>(
		(
			{
				variant = "filled",
				color = "primary",
				size = "md",
				isLoading,
				disabled,
				leftIcon,
				rightIcon,
				className,
				children,
				...props
			}: BaseButtonProps,
			ref,
		) => {
			const loadingStyle = isLoading ? "cursor-wait" : "";

			return (
				<button
					className={`${BASE_STYLE} ${SIZE_STYLES[size]} ${
						VARIANT_STYLES[variant][color]
					} ${loadingStyle} ${className ?? ""}`}
					ref={ref}
					disabled={disabled ?? isLoading}
					{...props}
				>
					{leftIcon && <span className="inline-flex">{leftIcon}</span>}
					{isLoading ? (
						<span className="inline-flex items-center gap-2 text-nowrap">
							<svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
									fill="none"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
								/>
							</svg>
							로딩중...
						</span>
					) : (
						children
					)}
					{rightIcon && <span className="inline-flex">{rightIcon}</span>}
				</button>
			);
		},
	),
);

BaseButton.displayName = "BaseButton";

export default BaseButton;

const BASE_STYLE =
	"flex justify-center items-center gap-2 rounded-xl font-medium transition-all duration-200 diabled:opacity-50 disabled:cursor-not-allowed";

const SIZE_STYLES: Record<ButtonSize, string> = {
	sm: "h-[4rem] px-4 text-body-sm",
	md: "h-[4.8rem] px-6 text-body",
	lg: "h-[5.6rem] px-8 text-body",
	full: "w-full h-[5.6rem] px-8 text-body",
	icon: "w-[3.2rem] h-[3.2rem]",
};

const VARIANT_STYLES: Record<ButtonVariant, Record<ButtonColor, string>> = {
	filled: {
		primary: "bg-primary text-white hover:bg-primary-600 active:bg-primary-700",
		"primary-500":
			"bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
		"primary-400":
			"bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600",
		gray: "",
		white: "",
		icon: "",
	},
	text: {
		primary: "text-primary hover:bg-primary/10 active:bg-primary/20",
		"primary-500":
			"text-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20",
		"primary-400":
			"text-primary-400 hover:bg-primary-400/10 active:bg-primary-400/20",
		gray: "",
		white: "",
		icon: "",
	},
	icon: {
		primary: "",
		"primary-500": "",
		"primary-400": "",
		gray: "",
		white: "",
		icon: "",
	},
};

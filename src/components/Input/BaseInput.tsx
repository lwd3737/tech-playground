import { forwardRef, InputHTMLAttributes, memo, ReactNode } from "react";

export type BaseInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"size"
> & {
	error?: string;
	helper?: string;
	label?: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	size?: InputSize;
	validateState?: ValidationState;
	fullWidth?: boolean;
	className?: string;
	containerClassName?: string;
} & InputVariantProps;

export type InputSize = "sm" | "md" | "lg";

export type InputVariant = "filled" | "outlined";

export type InputVariantProps =
	| {
			variant?: "filled";
			color?: never;
	  }
	| {
			variant?: "outlined";
			color?: InputOutlinedColor;
	  };

export type InputFilledColor = "white" | "gray";

export type InputOutlinedColor = "primary" | "gray";

export type ValidationState = "default" | "valid" | "invalid";

const BaseInput = memo(
	forwardRef<HTMLInputElement, BaseInputProps>(
		(
			{
				label,
				error,
				helper,
				required,
				disabled,
				size = "md",
				variant = "filled",
				color = "white",
				validateState = "default",
				fullWidth = true,
				leftIcon,
				rightIcon,
				className,
				containerClassName,
				...props
			},
			ref,
		) => {
			const borderStyle =
				validateState === "valid"
					? "border-2 border-success-500"
					: validateState === "invalid"
					? "border-2 border-error-500"
					: "border-2 border-primary-500";
			const boxStyle = `${fullWidth ? "w-full" : ""} ${
				leftIcon ? "pl-18" : "pl-10"
			} ${rightIcon ? "pr-18" : "pr-10"} ${borderStyle}`;
			const variantStyle =
				variant === "filled"
					? Styles.VARIANT.filled
					: Styles.VARIANT.outlined[color as InputOutlinedColor];
			const disabledStyle = disabled ? "opacity-50 cursor-not-allwed" : "";

			return (
				<div
					className={`${fullWidth ? "w-full" : "w-fit"} ${
						containerClassName ?? ""
					}`}
				>
					{label && (
						<label className="block mb-2 text-gray-300 text-body">
							{label}
							{required && <span className="ml-5 text-error-500">*</span>}
						</label>
					)}

					<div className="relative w-auto">
						{leftIcon && (
							<div className="absolute -translate-y-1/2 top-1/2 left-4">
								{leftIcon}
							</div>
						)}
						<input
							className={`${Styles.BASE} ${boxStyle} ${
								Styles.SIZES[size]
							} ${variantStyle} ${disabledStyle} ${className ?? ""}`}
							ref={ref}
							{...props}
						/>
						{rightIcon && (
							<div className="absolute -translate-y-1/2 top-1/2 right-4">
								{rightIcon}
							</div>
						)}
					</div>
					{(error ?? helper) && (
						<p
							className={`mt-1 text-body-small ${
								error ? "text-error-500" : "text-gray-400"
							}`}
						>
							{error ?? helper}
						</p>
					)}
				</div>
			);
		},
	),
);

BaseInput.displayName = "BaseInput";

export default BaseInput;

const Styles: {
	BASE: string;
	SIZES: Record<InputSize, string>;
	VARIANT: Record<"filled", string> &
		Record<"outlined", Record<InputOutlinedColor, string>>;
} = {
	BASE: "text-body rounded-2xl transition-all duration-200 outline-none",
	SIZES: {
		sm: "h-[4.8rem]",
		md: "h-[5.6rem]",
		lg: "h-[6.4rem]",
	},
	VARIANT: {
		filled: "bg-gray-800 text-white",
		outlined: {
			primary: "bg-transparent border-2 border-primary text-gray-700",
			gray: "bg-transparent border-2 border-gray-700 text-gray-700",
		},
	},
};

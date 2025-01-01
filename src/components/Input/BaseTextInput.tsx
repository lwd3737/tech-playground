// TODO: 공통 컴폰너트로 재구현
import { forwardRef, InputHTMLAttributes, memo, ReactNode } from "react";

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	error?: string;
	helper?: string;
	validationState?: ValidationState;
	right?: ReactNode;
}

type ValidationState = "default" | "valid" | "invalid";

const BaseInput = memo(
	forwardRef<HTMLInputElement, BaseInputProps>(
		(
			{
				label,
				error,
				helper,
				validationState = "default",
				required,
				disabled,
				right: right,
				...props
			},
			ref,
		) => {
			const validationStyle = (() => {
				switch (validationState) {
					case "invalid":
						return "border-2 border-error-500";
					case "valid":
						return "border-2 border-success-500";
					case "default":
						return "border-2 border-primary-500";
				}
			})();

			return (
				<div>
					{label && (
						<label className={`block mb-2 text-body text-gray-300`}>
							{label}
							{required && <span className="ml-5 text-error-500">*</span>}
						</label>
					)}

					<div className="relative">
						<input
							className={`w-full px-10 bg-gray-800 text-white text-body rounded-2xl ${validationStyle} ${
								right ? "pr-18" : "pr-10"
							} ${disabled ? "cursor-not-allowed opacity-50" : ""} `}
							ref={ref}
							{...props}
						/>
						{right && (
							<div className="absolute flex items-center -translate-y-1/2 top-1/2 right-4">
								{right}
							</div>
						)}
					</div>

					{(error ?? helper) && (
						<p
							className={`mt-1 text-sm ${
								error ? "text-error-400" : "text-gray-400"
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

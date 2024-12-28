import { forwardRef, InputHTMLAttributes, memo } from "react";

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

const BaseInput = memo(
	forwardRef<HTMLInputElement, BaseInputProps>((props) => {
		return <input {...props} />;
	}),
);

BaseInput.displayName = "BaseInput";

export default BaseInput;

import { forwardRef, useState } from "react";
import BaseInput, { BaseInputProps } from "./BaseTextInput";
import { EyeIcon } from "../Icon";
import BaseButton from "../Button/BaseButton";

export type PasswordInputProps = Omit<BaseInputProps, "type" | "right">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ ...props }) => {
		const [isVisible, setIsVisible] = useState(false);

		const toggleVisibility = () => setIsVisible(!isVisible);

		const VisibilityIcon = (
			<BaseButton variant="icon" color="icon" onClick={toggleVisibility}>
				<EyeIcon className={`${isVisible ? "opacity-70" : "opacity-100"}`} />
			</BaseButton>
		);

		return (
			<BaseInput
				type={isVisible ? "text" : "password"}
				right={VisibilityIcon}
				{...props}
			/>
		);
	},
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;

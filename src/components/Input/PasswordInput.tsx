import { forwardRef, useState } from "react";
import BaseInput, { BaseInputProps } from "./BaseTextInput";
import { EyeIcon } from "../Icon";

export type PasswordInputProps = Omit<BaseInputProps, "type" | "right">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ ...props }) => {
		const [isVisible, setIsVisible] = useState(false);

		const toggleVisibility = () => setIsVisible(!isVisible);

		const VisibilityIcon = (
			// TODO: 공통 Button 컴포넌트로 교체
			<button onClick={toggleVisibility}>
				<EyeIcon className={`${isVisible ? "opacity-70" : "opacity-100"}`} />
			</button>
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

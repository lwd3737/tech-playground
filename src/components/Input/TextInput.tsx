import { forwardRef } from "react";
import BaseInput, { BaseInputProps } from "./BaseTextInput";

type TextInputProps = Omit<BaseInputProps, "type">;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
	return <BaseInput ref={ref} type="text" {...props} />;
});

TextInput.displayName = "TextInput";

export default TextInput;

import { LoginFormProps } from "@/example/LogInForm/LoginForm";
import { validateEmail, validatePassword } from "@/utils/validate";
import { ChangeEventHandler, FormEvent, useCallback, useState } from "react";
import useAuth from "./useAuth";

interface FormState {
	email: string;
	password: string;
}

type FormErrors = Partial<FormState>;

const useLoginForm = ({ onSuccess, onError }: LoginFormProps) => {
	const [form, setForm] = useState<FormState>({ email: "", password: "" });
	const [errors, setErrors] = useState<FormErrors>({});
	const [isLoading, setIsLoading] = useState(false);

	const { login } = useAuth();

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
		(evt) => {
			const { name, value } = evt.target;

			setForm((prev) => ({ ...prev, [name]: value }));
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		},
		[],
	);

	const validateForm = useCallback(() => {
		const newErrors: FormErrors = {};

		const emailError = validateEmail(form.email);
		if (emailError) newErrors.email = emailError;

		const passwordError = validatePassword(form.password);
		if (passwordError) newErrors.password = passwordError;

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}, [form.email, form.password]);

	const handleSubmit = useCallback(
		async (evt: FormEvent) => {
			evt.preventDefault();

			if (!validateForm()) return;

			setIsLoading(true);
			try {
				await login({ email: form.email, password: form.password });
				onSuccess?.();
			} catch (error) {
				onError?.(error as Error);
			} finally {
				setIsLoading(false);
			}
		},
		[form.email, form.password, login, onError, onSuccess, validateForm],
	);

	return {
		form,
		errors,
		isLoading,
		handleInputChange,
		handleSubmit,
	};
};

export default useLoginForm;

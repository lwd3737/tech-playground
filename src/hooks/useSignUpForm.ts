import { SignUpFormProps } from "@/example/SignUpForm/SignUpForm";
import { validateEmail, validatePassword } from "@/utils/validate";
import { ChangeEventHandler, FormEvent, useCallback, useState } from "react";

interface FormState {
	email: string;
	password: string;
	passwordConfirm: string;
}

type FormErrors = Partial<FormState>;

const useSignUpForm = ({ onSuccess, onError }: SignUpFormProps) => {
	const [form, setForm] = useState<FormState>({
		email: "",
		password: "",
		passwordConfirm: "",
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isLoading, setIsLoading] = useState(false);

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

		if (form.password !== form.passwordConfirm)
			newErrors.passwordConfirm = "비밀번호가 다릅니다";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}, [form.email, form.password, form.passwordConfirm]);

	const handleSubmit = useCallback(
		async (evt: FormEvent) => {
			evt.preventDefault();

			if (!validateForm()) return;

			setIsLoading(true);
			try {
				await signup();
				onSuccess?.();
			} catch (error) {
				onError?.(error as Error);
			} finally {
				setIsLoading(false);
			}
		},
		[onError, onSuccess, validateForm],
	);

	return {
		form,
		errors,
		isLoading,
		handleInputChange,
		handleSubmit,
	};
};

export default useSignUpForm;

const signup = async () => {
	return new Promise((resolve) => setTimeout(resolve, 2000));
};

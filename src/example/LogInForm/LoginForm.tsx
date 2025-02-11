import BaseButton from "@/components/Button/BaseButton";
import PasswordInput from "@/components/Input/PasswordInput";
import TextInput from "@/components/Input/TextInput";
import useLoginForm from "@/hooks/useLoginForm";

export interface LoginFormProps {
	onSuccess?: () => void;
	onError?: (error: Error) => void;
}

const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
	const { form, errors, isLoading, handleInputChange, handleSubmit } =
		useLoginForm({ onSuccess, onError });

	return (
		<form
			className="flex flex-col gap-8 w-full w-max=[48.6rem]"
			noValidate
			onSubmit={handleSubmit}
		>
			<h1 className="mb-20 text-heading-1">Login</h1>

			<TextInput
				name="email"
				label="이메일"
				placeholder="이메일을 입력하세요"
				error={errors.email}
				disabled={isLoading}
				value={form.email}
				onChange={handleInputChange}
			/>
			<PasswordInput
				name="password"
				label="비밀번호"
				placeholder="비밀번호를 입력하세요."
				error={errors.password}
				disabled={isLoading}
				value={form.password}
				onChange={handleInputChange}
			/>

			<BaseButton
				type="submit"
				size="full"
				variant="filled"
				color="primary"
				isLoading={isLoading}
			>
				로그인
			</BaseButton>
		</form>
	);
};

export default LoginForm;

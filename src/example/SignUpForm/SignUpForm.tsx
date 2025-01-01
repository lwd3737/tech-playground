import { EmailIcon } from "@/components/Icon";
import PasswordInput from "@/components/Input/PasswordInput";
import TextInput from "@/components/Input/TextInput";
import useSignUpForm from "@/hooks/useSignUpForm";

export interface SignUpFormProps {
	onSuccess?: () => void;
	onError?: (error: Error) => void;
}

const SignUpForm = ({ onSuccess, onError }: SignUpFormProps) => {
	const { form, errors, isLoading, handleInputChange, handleSubmit } =
		useSignUpForm({
			onSuccess,
			onError,
		});

	return (
		<form
			className="flex flex-col gap-8 w-full w-max-[48.6rem]"
			noValidate
			onSubmit={handleSubmit}
		>
			<h1 className="mb-20 text-heading-1">Sign Up</h1>

			<TextInput
				name="email"
				label="이메일"
				placeholder="이메일을 입력하세요"
				error={errors.email}
				disabled={isLoading}
				validationState={errors.email ? "invalid" : "default"}
				required
				right={<EmailIcon />}
				value={form.email}
				onChange={handleInputChange}
			/>
			<PasswordInput
				name="password"
				label="비밀번호"
				placeholder="비밀번호를 입력하세요."
				error={errors.password}
				disabled={isLoading}
				validationState={errors.email ? "invalid" : "default"}
				required
				value={form.password}
				onChange={handleInputChange}
			/>
			<PasswordInput
				name="passwordConfirm"
				label="비밀번호 확인"
				placeholder="비밀번호를 다시 입력하세요."
				error={errors.passwordConfirm}
				disabled={isLoading}
				validationState={errors.email ? "invalid" : "default"}
				required
				value={form.passwordConfirm}
				onChange={handleInputChange}
			/>

			{/* TODO: 공통 버튼 컴포넌트로 교체 */}
			<button className="p-5 text-xl font-bold bg-primary-500 rounded-xl">
				회원가입
			</button>
		</form>
	);
};

SignUpForm.displayName = "SignupForm";

export default SignUpForm;

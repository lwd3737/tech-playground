export const validateEmail = (email: string): string | undefined => {
	if (!email) {
		return "이메일을 입력해주세요.";
	}

	if (!/^[^\s@]+@[^\s@]+\.[a-z]+$/.test(email)) {
		return "올바른 이메일 형식이 아닙니다.";
	}
};

export const validatePassword = (password: string): string | undefined => {
	if (!password) {
		return "비밀번호를 입력해주세요.";
	}

	if (password.length < 8) {
		return "비밀번호는 최소 8자 이상이어야 합니다.";
	}

	if (!/[A-Z]/.test(password)) {
		return "대문자를 포함해야 합니다.";
	}

	if (!/[a-z]/.test(password)) {
		return "소문자를 포함해야 합니다.";
	}

	if (!/[!@#$%^&*]/.test(password)) {
		return "특수문자(!@#$%^&*)를 포함해야 합니다.";
	}
};

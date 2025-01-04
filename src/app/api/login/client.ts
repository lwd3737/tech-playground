import { AuthCredentials } from "@/types/auth";
import { LoginResponseDto } from "./dto";

export const loginApi = async (
	credentials: AuthCredentials,
): Promise<LoginResponseDto> => {
	const res = await fetch("/api/login", {
		method: "POST",
		body: JSON.stringify(credentials),
		headers: {
			"Content-type": "application/json",
		},
	});
	return await res.json();
};

import { AuthCredentials } from "@/types/auth";

export type LoginRequestDto = AuthCredentials;

export interface LoginResponseDto {
	message: string;
}

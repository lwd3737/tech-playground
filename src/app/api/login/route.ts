import { NextRequest, NextResponse } from "next/server";
import { LoginRequestDto } from "./dto";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
	const { email, password } = (await req.json()) as LoginRequestDto;

	// DB에서 회원 계정 조회 및 비밀번호 확인
	const encoder = new TextEncoder();

	const refreshToken = await new SignJWT()
		.setSubject(email)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("7d")
		.sign(encoder.encode("secret_key"));

	const accessToken = await new SignJWT()
		.setSubject(email)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("1d")
		.sign(encoder.encode("secret_key"));

	const cookieStore = await cookies();

	cookieStore.set("access_token", accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production" ? true : false,
		expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
	});

	cookieStore.set("refresh_token", refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production" ? true : false,
		expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
	});

	return NextResponse.json({
		message: "Login is success",
	});
}

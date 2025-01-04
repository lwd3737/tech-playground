import { loginApi } from "@/app/api/login/client";
import { logoutApi } from "@/app/api/login/logout/client";
import { AuthCredentials } from "@/types/auth";
import { createContext, ReactNode, useCallback, useState } from "react";

export interface AuthContextType {
	isLoggedIn: boolean;
	login: (credentials: AuthCredentials) => Promise<void>;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = useCallback(async (credentials: AuthCredentials) => {
		try {
			await loginApi(credentials);
			setIsLoggedIn(true);
		} catch {
			setIsLoggedIn(false);
		}
	}, []);

	const logout = useCallback(async () => {
		try {
			await logoutApi();
			setIsLoggedIn(false);
		} catch {}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

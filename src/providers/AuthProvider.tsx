import { createContext, ReactNode, useCallback, useState } from "react";

export interface AuthContextType {
	isLoggedIn: boolean;
	login: () => Promise<void>;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = useCallback(async () => {
		setIsLoggedIn(true);
	}, []);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
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

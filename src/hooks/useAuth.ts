import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("AuthProvider not found");

	return context;
};

export default useAuth;

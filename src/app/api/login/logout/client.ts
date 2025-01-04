export const logoutApi = async () => {
	const res = await fetch("/logout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await res.json();
};

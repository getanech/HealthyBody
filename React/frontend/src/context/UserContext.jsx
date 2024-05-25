import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	useEffect(() => {
		if (user) localStorage.setItem("user", JSON.stringify(user));
		else localStorage.removeItem("user");
	}, [user]);

	const updateUser = (user) => {
		setUser(user);
		localStorage.setItem("user", JSON.stringify(user));
	};

	const removeUser = () => {
		localStorage.setItem("user", null);
		setUser(null);
		navigate("/");
	};

	return (
		<UserContext.Provider value={{ user, updateUser, removeUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;

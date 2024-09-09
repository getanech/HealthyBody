import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userRequests from "../api/userRequests";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const navigate = useNavigate();

	const getUserFromStorage = () => {
		const userObject = JSON.parse(localStorage.getItem("user")) || null;
		return userObject;
	};

	const [user, setUser] = useState(getUserFromStorage());

	const refreshUserInfoFromServer = async () => {
		const response = await userRequests.getUserInfo(user._id);
		const data = response.data.data;
		setUser(data);
	};

	// useEffect(() => {
	// 	getUserFromStorage();
	// }, []);

	useEffect(() => {
		if (user) localStorage.setItem("user", JSON.stringify(user));
		else localStorage.removeItem("user");
	}, [user]);

	const updateUser = (updatedUser) => {
		localStorage.setItem("user", JSON.stringify(updatedUser));
		setUser(getUserFromStorage());
	};

	const removeUser = () => {
		localStorage.setItem("user", null);
		setUser(null);
		navigate("/");
	};

	return (
		<UserContext.Provider
			value={{ user, updateUser, removeUser, refreshUserInfoFromServer }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;

import React, { useContext, useRef, useState } from "react";
import userRequests from "../../api/userRequests";
import UserContext from "../../context/UserContext";
import "./profile.css";
export default function ChangePassword() {
	const { user } = useContext(UserContext);
	const oldPassRef = useRef(null);
	const newPassRef = useRef(null);

	const checkValidOldPassword = async () => {
		const res = await userRequests.validatePassword(
			user,
			oldPassRef.current.value
		);

		if (res.data.data) {
			setContent(showNewPassword());
		} else {
			alert("Wrong password");
		}
	};

	const handleChangePassword = async () => {
		const res = await userRequests.changePassword(
			user,
			newPassRef.current.value
		);
		if (res.data.data) {
			alert("Password changed successfully");
		} else {
			alert("Password change failed");
		}
	};

	const showOldPassword = () => {
		return (
			<div className="changePasswordContainer">
				<h3>Old password:</h3>
				<input ref={oldPassRef} type="password" />
				<button onClick={checkValidOldPassword}>Submit</button>
			</div>
		);
	};

	const showNewPassword = () => {
		return (
			<div className="changePasswordContainer">
				<h3>New password:</h3>
				<input ref={newPassRef} type="password" />
				<button onClick={handleChangePassword}>Change Password</button>
			</div>
		);
	};

	const [content, setContent] = useState(showOldPassword());

	return (
		<div className="changePasswordWrapper">
			<h3>changePassword</h3>
			{content}
		</div>
	);
}

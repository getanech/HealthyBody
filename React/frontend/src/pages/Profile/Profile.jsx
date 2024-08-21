import React, { useContext, useRef, useState } from "react";
import "./profile.css";
import UserContext from "../../context/UserContext";
import userRequests from "../../api/userRequests";

export default function Profile() {
	const { user, updateUser } = useContext(UserContext);
	const [editMode, setEditMode] = useState(false);
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const phoneRef = useRef(null);
	const ageRef = useRef(null);
	const heightRef = useRef(null);

	const handleEdit = async () => {
		const updatedUser = {
			...user,
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			phone: phoneRef.current.value,
			age: ageRef.current.value,
			height: heightRef.current.value,
		};

		const response = await userRequests.updateUser(updatedUser);
		if (response.status === 200) {
			updateUser(response.data.data);
		}
		setEditMode(!editMode);
	};

	return (
		<div className="menuContainer">
			<div className="contentWrapper">
				<div className="tabPanel">
					<button onClick={() => window.history.back()}>Back</button>
					<button onClick={() => setEditMode(!editMode)}>Edit</button>
					<button>Change Password</button>
					<button>Statistics</button>
				</div>
				<h1>Profile</h1>
				<div className="profileGrid">
					<div className="profileSectionContainer">
						<label>First Name: </label>
						{editMode ? (
							<input
								type="text"
								defaultValue={user.firstName}
								ref={firstNameRef}
							/>
						) : (
							<label>{user.firstName}</label>
						)}
					</div>
					<div className="profileSectionContainer">
						<label>Last Name: </label>
						{editMode ? (
							<input
								type="text"
								defaultValue={user.lastName}
								ref={lastNameRef}
							/>
						) : (
							<label>{user.lastName}</label>
						)}
					</div>
					<div className="profileSectionContainer">
						<label>Email: </label>
						<label>{user.email}</label>
					</div>
					<div className="profileSectionContainer">
						<label>Phone: </label>
						{editMode ? (
							<input type="text" defaultValue={user.phone} ref={phoneRef} />
						) : (
							<label>{user.phone}</label>
						)}
					</div>
					<div className="profileSectionContainer">
						<label>Age: </label>
						{editMode ? (
							<input type="number" defaultValue={user.age} ref={ageRef} />
						) : (
							<label>{user.age}</label>
						)}
					</div>
					<div className="profileSectionContainer">
						<label>Height: </label>
						{editMode ? (
							<input
								type="number"
								step="0.01"
								defaultValue={user.height}
								ref={heightRef}
							/>
						) : (
							<label>{user.height} m</label>
						)}
					</div>
					<div className="profileSectionContainer">
						<label>Weight: </label>
						<label>{user.weight} kg</label>
						{/* {editMode ? (
							<input type="number" step="0.01" defaultValue={user.weight} ref={weightRef} />
						) : (
						)} */}
						{/* {editMode ? <input type="number" defaultValue={user.weight} /> : 
						<label>{user.weight}</label>} } */}
					</div>
				</div>
				{editMode && <button onClick={handleEdit}>Submit changes</button>}
			</div>
		</div>
	);
}

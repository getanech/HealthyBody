import { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./ActionPanel.css";
import { useNavigate } from "react-router-dom";

export default function ActionPanel() {
	const { user, removeUser } = useContext(UserContext);
	const navigate = useNavigate();
	return (
		<div className="actionPanelContainer">
			<button onClick={() => navigate("/workouts")}>אימונים</button>
			<button onClick={() => navigate("/profile")}>פרופיל</button>
			<button onClick={removeUser}>יציאה</button>
		</div>
	);
}

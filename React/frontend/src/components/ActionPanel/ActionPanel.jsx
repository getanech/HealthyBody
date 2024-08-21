import { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./ActionPanel.css";
import { useNavigate } from "react-router-dom";

export default function ActionPanel() {
	const { user, removeUser } = useContext(UserContext);
	const navigate = useNavigate();
	return (
		<div className="actionPanelContainer">
			<button>אימון חדש</button>
			<button onClick={() => navigate("/workouts")}>My workout plan</button>
			<button>1234</button>
			<button onClick={() => navigate("/profile")}>Profile</button>
			<button>Action</button>
			<button>Action</button>
			<button>ביטול מנוי</button>
			<button onClick={removeUser}>יציאה</button>
		</div>
	);
}

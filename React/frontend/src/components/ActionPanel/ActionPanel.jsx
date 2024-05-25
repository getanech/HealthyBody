import { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./ActionPanel.css";

export default function ActionPanel() {
	const { user, removeUser } = useContext(UserContext);
	return (
		<div className="actionPanelContainer">
			<button>אימון חדש</button>
			<button>Action</button>
			<button>Action</button>
			<button>Action</button>
			<button>Action</button>
			<button>Action</button>
			<button>ביטול מנוי</button>
			<button onClick={removeUser}>יציאה</button>
		</div>
	);
}

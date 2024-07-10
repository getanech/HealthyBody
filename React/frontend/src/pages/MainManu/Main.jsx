import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import DayView from "./DayView";
import DayPicker from "./DayPicker";
import ActionPanel from "../../components/ActionPanel";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Main() {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const [selectedDate, setSelectedDate] = useState(new Date());

	useEffect(() => {
		if (!user) navigate("/");
	}, []);

	return (
		<div className="menuContainer">
			<div className="contentWrapper">
				<h4>
					Hello {user.firstName} {user.lastName}
				</h4>
				<div className="menuPanel">
					<div className="menuOption dayView">
						<DayView date={selectedDate} />
					</div>
					<div className="menuOption actionPanel">
						<ActionPanel />
					</div>
					<div className="menuOption">
						<DayPicker setDate={setSelectedDate} selectedDate={selectedDate} />
					</div>
				</div>
			</div>
		</div>
	);
}

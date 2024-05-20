import React from "react";
import "./Main.css";
import DayView from "./DayView";
import DayPicker from "./DayPicker";
import ActionPanel from "../../components/ActionPanel";

export default function Main() {
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	return (
		<div className="menuContainer">
			<div className="menuPanel">
				<div className="menuOption dayView">
					<DayView date={selectedDate} />
				</div>
				<div className="menuOption">
					<ActionPanel />
				</div>
				<div className="menuOption">
					<DayPicker setDate={setSelectedDate} selectedDate={selectedDate} />
				</div>
			</div>
		</div>
	);
}

import React from "react";
import "./Main.css";
import DayView from "./DayView";

export default function Main() {
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	return (
		<div className="menuContainer">
			<div className="menuPanel">
				<div className="menuOption dayView">
					<DayView date={selectedDate} />
				</div>
				<div className="menuOption">1</div>
				<div className="menuOption">3</div>
			</div>
		</div>
	);
}

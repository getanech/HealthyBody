import { useEffect } from "react";
import "./dayPicker.css";

export default function DayPicker({ selectedDate, setDate }) {
	const weekDayNames = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

	const showFullWeek = () => {
		const dateArr = [];
		const DAY_COUNT = 3;

		for (let i = DAY_COUNT; i >= 1; i--) {
			const tempDate = new Date(selectedDate);
			dateArr.push(new Date(tempDate.setDate(selectedDate.getDate() - i)));
		}
		dateArr.push(selectedDate);
		for (let i = 1; i <= DAY_COUNT; i++) {
			const tempDate = new Date(selectedDate);
			dateArr.push(new Date(tempDate.setDate(selectedDate.getDate() + i)));
		}

		return (
			<div className="weekDaysContainer">
				{dateArr.map((date, index) => {
					const dateObj = new Date(date);
					const dayName = weekDayNames[dateObj.getDay()];
					let cellStyle = "weekDayCell";
					if (dateObj.toDateString() === selectedDate.toDateString()) {
						cellStyle += " current";
					}
					return (
						<div
							key={index}
							className={cellStyle}
							onClick={() => setDate(dateObj)}
						>
							<label className="dayName">{dayName}</label>
							<label className="dayDate">
								{new Date(date).toLocaleDateString("he-IL")}
							</label>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div>
			{showFullWeek()}
			<input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
		</div>
	);
}

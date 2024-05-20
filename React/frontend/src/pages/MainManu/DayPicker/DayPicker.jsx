import { useEffect } from "react";
import "./dayPicker.css";
import mockData from "../../../mockData";

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

	const showMonthView = () => {
		const dayNames = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];
		const firstDay = new Date(
			selectedDate.getFullYear(),
			selectedDate.getMonth(),
			1
		);
		const lastDay = new Date(
			selectedDate.getFullYear(),
			selectedDate.getMonth() + 1,
			0
		);
		const dateArr = [];
		let currentDate = new Date(firstDay);
		let dayCounter = 0;
		while (currentDate.getDay() > 0) {
			dayCounter++;
			currentDate.setDate(currentDate.getDate() - 1);
		}
		while (currentDate < firstDay) {
			dateArr.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 1);
		}

		currentDate = new Date(firstDay);
		while (currentDate <= lastDay) {
			dateArr.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 1);
		}

		while (currentDate.getDay() != 0) {
			dateArr.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return (
			<div className="monthViewContainer">
				{dayNames.map((dayName, index) => (
					<div className="dayHeader" key={index}>
						{dayName}
					</div>
				))}
				<>
					{dateArr.map((date, index) => {
						let classes = "calendarCell";
						if (isWorkoutDay(date)) {
							classes += " workoutDay";
							console.log("classes", classes);
						}
						return (
							<div
								className={classes}
								key={index}
								onClick={() => setDate(date)}
							>
								{date.getDate()}
							</div>
						);
					})}
				</>
			</div>
		);
	};

	const isWorkoutDay = (date) => {
		const dateObj = new Date(date).toLocaleDateString("he-IL").toString();
		for (let i = 0; i < mockData.users.length; i++) {
			const user = mockData.users[i];
			if (user.id === 1) {
				for (let j = 0; j < user.workouts.length; j++) {
					const workout = user.workouts[j];
					if (workout.date == dateObj) {
						return true;
					}
				}
			}
		}
		return false;
	};

	return (
		<div className="dayPickerContainer">
			{showFullWeek()}
			<input
				defaultValue={selectedDate}
				type="date"
				className="dateInput"
				onChange={(e) => setDate(new Date(e.target.value))}
			/>
			{showMonthView()}
		</div>
	);
}

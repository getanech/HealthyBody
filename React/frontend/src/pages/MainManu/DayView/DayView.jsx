import { useEffect, useState } from "react";
import "./dayView.css";
import mockData from "../../../mockData";
import { json } from "react-router-dom";

export default function DayView({ date }) {
	const [workoutData, setWorkoutData] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);
	useEffect(() => {
		fetchData();
	}, [date]);

	const fetchData = () => {
		const workouts = mockData.users[0].workouts;
		for (let i = 0; i < workouts.length; i++) {
			console.log(
				'workouts[i].date == date.toLocaleDateString("he-IL")',
				workouts[i].date == date.toLocaleDateString("he-IL")
			);
			if (workouts[i].date == date.toLocaleDateString("he-IL")) {
				setWorkoutData(workouts[i]);
				return;
			}
		}
		setWorkoutData(null);
	};

	const showWorkoutData = () => {
		if (!workoutData) return <></>;
		return (
			<div className="workoutDataContainer">
				<label style={{ fontWeight: "bold" }}>
					משך האימון: {workoutData.duration} דקות
				</label>
				<label>קבוצות שרירים:</label>
				<div className="tableHeaders">
					<p>שריר</p>
					<div className="exerciseHeaders">
						<p>תרגיל</p>
						<p>חזרות</p>
						<p>משקל</p>
					</div>
				</div>
				<div className="workoutTable">
					{workoutData.muscles.map((muscle, index) => {
						return (
							<div className="muscleInfo" key={index}>
								<h3>{muscle.muscle}</h3>
								<div>
									{muscle.exercises.map((exercise, index) => {
										return (
											<div className="exerciseInfo" key={index}>
												{exercise.name && (
													<div className="exInfoItem">{exercise.name}</div>
												)}
												{exercise.reps && (
													<div className="exInfoItem">{exercise.reps}</div>
												)}
												{exercise.weight && (
													<div className="exInfoItem">{exercise.weight}</div>
												)}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	return (
		<div className="dayViewContainer">
			<h4>האימון הקרוב: {date.toLocaleDateString("he-IL")}</h4>
			{showWorkoutData()}
		</div>
	);
}

import { useEffect, useState } from "react";
import "./dayView.css";
import mockData from "../../../mockData";
import { json } from "react-router-dom";

export default function DayView({ date }) {
	const [workoutData, setWorkoutData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		const data = mockData.users[0].workouts[0];
		console.log("data", data);
		setWorkoutData(data);
	};

	const showWorkoutData = () => {
		if (!workoutData) return <></>;
		return (
			<div className="workoutDataContainer">
				<h4>משך האימון: {workoutData.duration} דקות</h4>
				<h4>קבוצות שרירים:</h4>
				<div className="workoutHeaders">
					<p>שריר</p>
					<p>תרגיל</p>
					<p>חזרות</p>
					<p>משקל</p>
				</div>
				<div
					className="workoutTable"
					// style={{ gridTemplateRows: `${workoutData.muscles.length}` }}
				>
					{workoutData.muscles.map((muscle, index) => {
						return (
							<div
								className="muscleInfo"
								// style={{ gridRow: `1 / span ${muscle.exercises.length}` }}
								key={index}
							>
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

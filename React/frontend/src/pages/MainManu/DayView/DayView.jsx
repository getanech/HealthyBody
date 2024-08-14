import { useContext, useEffect, useState } from "react";
import "./dayView.css";
import mockData from "../../../mockData";
import { json } from "react-router-dom";
import UserContext from "../../../context/UserContext";

export default function DayView({ date }) {
	const { user } = useContext(UserContext);
	const [workoutData, setWorkoutData] = useState(null);
	useEffect(() => {
		fetchData();
	}, [date]);

	const fetchData = () => {
		 return [];
		const dayWorkouts = [];
		for (const workout of user.workouts) {
			console.log("workout", workout);
			for (const workoutDate of workout.dates) {
				if (
					new Date(date).toDateString() == new Date(workoutDate).toDateString()
				) {
					dayWorkouts.push(workout);
				}
			}
		}
		// console.log("dayWorkouts", dayWorkouts);
		setWorkoutData(dayWorkouts || null);
		// setWorkoutData(user.workouts[0]);

		// const workouts = mockData.users[0].workouts;
		// for (let i = 0; i < workouts.length; i++) {
		// 	console.log(
		// 		'workouts[i].date == date.toLocaleDateString("he-IL")',
		// 		workouts[i].date == date.toLocaleDateString("he-IL")
		// 	);
		// 	if (workouts[i].date == date.toLocaleDateString("he-IL")) {
		// 		setWorkoutData(workouts[i]);
		// 		return;
		// 	}
		// }
		// setWorkoutData(null);
	};

	const showWorkoutData = () => {
		if (!workoutData || workoutData.length == 0) {
			return (
				<div className="workoutDataContainer">
					<p>אין אימונים בתאריך זה</p>
				</div>
			);
		}

		console.log("workoutData", workoutData);

		return (
			<div className="workoutDataContainer">
				{workoutData.map((workout, index) => {
					return (
						<div key={index}>
							<div className="workoutName">{workout.name}</div>
							<div className="workoutExercises">
								<div className="workoutExerciseTable">
									<label>תרגיל</label>
									<label>קבוצות שררים</label>
									<label>חזרות</label>
									<label>משקל עבודה</label>
								</div>
								{workout.exercises.map((exercise, index) => (
									<div key={index} className="workoutExerciseTable">
										<label>{exercise.exercise.name}</label>
										<label>{exercise.exercise.muscleGroups.join(", ")}</label>
										<label>{exercise.reps}</label>
										<label>{exercise.weight ? exercise.weight : "-"}</label>
									</div>
								))}
							</div>
						</div>
					);
				})}
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

import React from "react";
import "./Workout.css";

export default function WorkoutModal({ workout, close, addToMyWorkouts }) {
	const [editMode, setEditMode] = React.useState(false);
	const showExerciseInfo = () => {
		return (
			<div className="exerciseInfoContainer">
				{workout.exercises.map((exObject, index) => {
					return (
						<div className="exerciseInfoGrid" key={index}>
							<p>{exObject.exercise.name}</p>
							<p>{exObject.reps}</p>
							<p>{exObject.exercise.muscleGroups.join(", ")}</p>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div className="WorkoutModal">
			<div className="WorkoutPanel">
				<div className="workoutInfo">
					<div className="workoutHeader">
						<h1 className="h1">{workout.name}</h1>
						<button onClick={() => setEditMode(!editMode)}>Edit</button>
					</div>
					{showExerciseInfo()}
				</div>
				<div className="buttonPanel">
					<button onClick={() => addToMyWorkouts(workout)}>
						Add to my workouts
					</button>
					<button onClick={close}>Close</button>
				</div>
			</div>
		</div>
	);
}

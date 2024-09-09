import React, { useContext, useState } from "react";

export default function WorkoutDayViewItem({ workout, submitUpdate }) {
	const [editMode, setEditMode] = useState(false);
	const [tempWorkoutObject, setTempWorkoutObject] = useState({
		...workout,
	});

	const renderExerciseWeight = (exercise) => {
		if (editMode)
			return (
				<input
					type="number"
					defaultValue={exercise.weight ? exercise.weight : 0}
					onChange={(e) => {
						exercise.weight = parseInt(e.target.value);
					}}
				/>
			);
		return exercise.weight ? exercise.weight : "-";
	};

	const renderExerciseReps = (exercise) => {
		if (editMode)
			return (
				<input
					type="number"
					defaultValue={exercise.reps ? exercise.reps : 0}
					onChange={(e) => {
						exercise.reps = parseInt(e.target.value);
					}}
				/>
			);
		return exercise.reps ? exercise.reps : "-";
	};

	return (
		<div>
			<div className="workoutName">{workout.name}</div>

			<div className="workoutExercises">
				<div className="workoutActionPanel">
					<button onClick={() => submitUpdate(tempWorkoutObject)}>✌️</button>

					<button
						onClick={() => {
							setEditMode(!editMode);
						}}
					>
						🖊️
					</button>
				</div>
				<div className="workoutExerciseTable">
					<label>תרגיל</label>
					<label>קבוצות שרירים</label>
					<label>חזרות</label>
					<label>משקל עבודה</label>
				</div>
				{tempWorkoutObject.exercises.map((exercise, index) => {
					return (
						<div key={index} className="workoutExerciseTable">
							<label>{exercise.exercise.name}</label>
							<label>{exercise.exercise.muscleGroups.join(", ")}</label>
							<label>{renderExerciseReps(exercise)}</label>
							<label>{renderExerciseWeight(exercise)}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
}

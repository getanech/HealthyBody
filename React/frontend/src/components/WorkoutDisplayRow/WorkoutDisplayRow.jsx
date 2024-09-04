import "./workoutDisplayRow.css";

export default function WorkoutDisplayRow({
	workoutName,
	workouts,
	removeAction,
}) {
	return (
		<div className="workoutDisplayRow">
			<div>
				<h3>{workoutName}</h3>
			</div>
			{/* <div>{workout.description}</div> */}
			<button onClick={removeAction}>Remove</button>
		</div>
	);
}

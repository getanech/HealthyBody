import "./workoutDisplayRow.css";

export default function WorkoutDisplayRow({ workout, removeAction }) {
	return (
		<div className="workoutDisplayRow">
			<div>
				<h3>{workout.name}</h3>
			</div>
			{/* <div>{workout.description}</div> */}
			<button onClick={removeAction}>Remove</button>
		</div>
	);
}

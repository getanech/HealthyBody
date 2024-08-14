import React, { useState } from "react";

export default function NewExerciseRow({ exerciseData, submitExercise }) {
	const [customNameMode, setCustomNameMode] = useState(false);
	const [reps, setReps] = useState(10);

	const [selectedExercise, setSelectedExercise] = useState(null);

	const renderSelection = () => {
		const inputStyle = { height: "3rem" };
		if (customNameMode) {
			return <input style={inputStyle} type="text" />;
		} else {
			return (
				<select style={inputStyle}>
					{exerciseData.map((exercise) => (
						<option
							key={exercise._id}
							onClick={() => setSelectedExercise(exercise)}
						>
							{exercise.name}
						</option>
					))}
				</select>
			);
		}
	};

	const renderReps = () => {
		return (
			<div className="exerciseRepContainer">
				<button onClick={() => setReps(reps - 1)}>-</button>
				<p>{reps}</p>
				<button onClick={() => setReps(reps + 1)}>+</button>
			</div>
		);
	};

	const renderDescription = () => {
		if (!selectedExercise) {
			return <input />;
		}

		const temp = selectedExercise.muscleGroups.join(", ");
		return <p>{temp}</p>;
	};

	const rowStyle = {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr",
		gap: "1rem",
	};

	const handleSubmit = () => {
		submitExercise(selectedExercise, reps);
	};

	return (
		<div style={rowStyle}>
			{renderSelection()}
			{renderReps()}
			{renderDescription()}
			<button onClick={handleSubmit} style={{ width: "5rem" }}>
				➕
			</button>
		</div>
	);
}

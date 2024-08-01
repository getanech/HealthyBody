import React, { useState } from "react";

export default function NewExerciseRow(exerciseData) {
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
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
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

		return <p>description</p>;
	};

	const rowStyle = {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr",
		gap: "1rem",
	};

	return (
		<div style={rowStyle}>
			{renderSelection()}
			{renderReps()}
			{renderDescription()}
			<button style={{ width: "5rem" }}>➕</button>
		</div>
	);
}

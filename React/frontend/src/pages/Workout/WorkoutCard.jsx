import React, { useEffect, useState } from "react";
export default function WorkoutCard({ workout, setSelectedWorkout }) {
	const [tags, setTags] = useState([]);
	useEffect(() => {
		let tagSet = new Set();
		for (let i = 0; i < workout.exercises.length; i++) {
			for (
				let j = 0;
				j < workout.exercises[i].exercise.muscleGroups.length;
				j++
			) {
				tagSet.add(workout.exercises[i].exercise.muscleGroups[j]);
			}
		}
		setTags([...tagSet]);
	}, []);
	return (
		<div className="workoutCard" onClick={() => setSelectedWorkout(workout)}>
			<h2>
				{workout.name} ({workout.exercises.length})
			</h2>
			<div className="tagContainer">
				{tags.map((tag, index) => {
					return (
						<div key={index} className="tag">
							<p>{tag} 🔹</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

import React from "react";

export default function WorkoutCard({ workout }) {
	console.log("workout", workout);
	return (
		<div className="workoutCard">
			<h2>
				{workout.name} ({workout.exercises.length})
			</h2>
			<div className="tagContainer">
				{workout.tags.map((tag, index) => {
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

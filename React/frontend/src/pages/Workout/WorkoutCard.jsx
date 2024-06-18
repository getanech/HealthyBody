import React from "react";

export default function WorkoutCard({ workout, setSelectedWorkout }) {
	
	return (
		<div className="workoutCard" onClick={() => setSelectedWorkout(workout)}>
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

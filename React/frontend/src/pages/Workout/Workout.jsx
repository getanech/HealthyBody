import workoutsApi from "../../api/workoutRequests";
import "./Workout.css";
import React, { useState } from "react";
import WorkoutCard from "./WorkoutCard";

export default function Workout() {
	const [workoutData, setWorkoutData] = useState([]);

	const refreshWorkoutData = async () => {
		try {
			const response = await workoutsApi.getWorkouts();
			setWorkoutData(response.data.data);
		} catch (error) {
			console.error(error);
		}
	};

	useState(() => {
		refreshWorkoutData();
	}, []);

	const renderWorkoutCards = () => {
		return (
			<div className="workoutCardsGrid">
				{workoutData.map((workout) => (
					<WorkoutCard key={workout.id} workout={workout} />
				))}
			</div>
		);
	};

	return (
		<div className="menuContainer">
			<div className="contentWrapper">
				<div className="tabPanel">
					<button>My Workouts</button>
					<button>Explore Workouts</button>
				</div>

				{renderWorkoutCards()}
			</div>
		</div>
	);
}

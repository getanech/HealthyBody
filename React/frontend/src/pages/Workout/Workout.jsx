import workoutsApi from "../../api/workoutRequests";
import "./Workout.css";
import React, { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutModal from "../../components/WorkoutModal/WorkoutModal";


export default function Workout() {
	const [workoutData, setWorkoutData] = useState([]);
	const [selectedWorkout, setSelectedWorkout] = useState(null)

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
				{workoutData.map((workout, index) => (
					<WorkoutCard key={index} setSelectedWorkout={setSelectedWorkout} workout={workout} />
				))}
			</div>
		);
	};
	return (
		<div className="menuContainer">
			{selectedWorkout && <WorkoutModal workout={selectedWorkout}/>}
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

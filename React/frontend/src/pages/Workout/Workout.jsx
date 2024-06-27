import workoutsApi from "../../api/workoutRequests";
import "./Workout.css";
import React, { useContext, useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutModal from "../../components/WorkoutModal/WorkoutModal";
import UserContext from "../../context/UserContext";
import userRequests from "../../api/userRequests";

export default function Workout() {
	const { user } = useContext(UserContext);
	const [workoutData, setWorkoutData] = useState([]);
	const [selectedWorkout, setSelectedWorkout] = useState(null);

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
					<WorkoutCard
						key={index}
						setSelectedWorkout={setSelectedWorkout}
						workout={workout}
					/>
				))}
			</div>
		);
	};
<<<<<<< HEAD
=======

	const addWorkoutToMyWorkouts = async (workout) => {
		try {
			const res = await userRequests.addUserWorkout(user._id, workout._id);
			console.log("res", res);
			// refreshWorkoutData();
		} catch (error) {
			console.error(error);
		}
	};

	const createNewWorkout = async () => {};

>>>>>>> db2472ae4ab34007fdb9462280ec35bae51e0c0b
	return (
		<div className="menuContainer">
			{selectedWorkout && (
				<WorkoutModal
					workout={selectedWorkout}
					close={() => setSelectedWorkout(null)}
					addToMyWorkouts={addWorkoutToMyWorkouts}
					createNewWorkout={createNewWorkout}
				/>
			)}
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

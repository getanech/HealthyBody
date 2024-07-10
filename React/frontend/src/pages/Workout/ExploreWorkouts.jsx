import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import workoutsApi from "../../api/workoutRequests";
import WorkoutCard from "./WorkoutCard";
import userRequests from "../../api/userRequests";
import WorkoutModal from "../../components/WorkoutModal/WorkoutModal";

export default function ExploreWorkouts() {
	const { user, refreshUserInfoFromServer } = useContext(UserContext);
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

	const addWorkoutToMyWorkouts = async (workout) => {
		try {
			const res = await userRequests.addUserWorkout(user._id, workout);
			await refreshUserInfoFromServer();
			refreshWorkoutData();
		} catch (error) {
			console.error(error);
		}
	};

	const createNewWorkout = async () => {};

	return (
		<>
			{selectedWorkout && (
				<WorkoutModal
					workout={selectedWorkout}
					close={() => setSelectedWorkout(null)}
					addToMyWorkouts={addWorkoutToMyWorkouts}
					createNewWorkout={createNewWorkout}
				/>
			)}
			{renderWorkoutCards()}
		</>
	);
}

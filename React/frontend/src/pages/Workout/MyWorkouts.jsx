import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import userRequests from "../../api/userRequests";
import WorkoutDisplayRow from "../../components/WorkoutDisplayRow";

export default function MyWorkouts() {
	const { user, refreshUserInfoFromServer } = useContext(UserContext);
	const [myWorkouts, setMyWorkouts] = useState([]);

	const removeUserWorkout = async (workoutId) => {
		const response = await userRequests.removeUserWorkout(user._id, workoutId);
		await refreshUserInfoFromServer();
		await refreshUserWorkouts();
	};

	const refreshUserWorkouts = async () => {
		try {
			const response = await userRequests.getUserWorkouts(user._id);
			setMyWorkouts(response.data.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		refreshUserWorkouts();
	}, []);

	const renderUserWorkouts = () => {
		if (myWorkouts.length === 0) {
			return <div>No Workouts Found</div>;
		}

		const groupedWorkouts = new Map();

		for (let i = 0; i < myWorkouts.length; i++) {
			if (!groupedWorkouts.has(myWorkouts[i].name)) {
				groupedWorkouts.set(myWorkouts[i].name, [myWorkouts[i]]);
			} else {
				groupedWorkouts.get(myWorkouts[i].name).push(myWorkouts[i]);
			}
		}

		return (
			<div className="myWorkoutsList">
				{Array.from(groupedWorkouts).map(([workoutName, workouts]) => (
					<WorkoutDisplayRow
						key={workoutName}
						workoutName={workoutName}
						workouts={workouts}
						removeAction={() => removeUserWorkout(workout._id)}
					/>
				))}
			</div>
		);
	};

	return <div className="myWorkoutsWrapper">{renderUserWorkouts()}</div>;
}

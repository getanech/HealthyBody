import workoutsApi from "../../api/workoutRequests";
import "./Workout.css";
import React, { useContext, useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutModal from "../../components/WorkoutModal/WorkoutModal";
import UserContext from "../../context/UserContext";
import userRequests from "../../api/userRequests";
import ExploreWorkouts from "./ExploreWorkouts";
import MyWorkouts from "./MyWorkouts";

export default function Workout() {
	const { user } = useContext(UserContext);

	const tabNavigator = {
		"Explore Workouts": <ExploreWorkouts />,
		"My Workouts": <MyWorkouts />,
	};

	const [pageState, setPageState] = useState(<ExploreWorkouts />);

	return (
		<div className="menuContainer">
			<div className="contentWrapper">
				<div className="tabPanel">
					<button onClick={() => setPageState(<MyWorkouts />)}>
						My Workouts
					</button>
					<button onClick={() => setPageState(<ExploreWorkouts />)}>
						Explore Workouts
					</button>
				</div>

				{pageState}
			</div>
		</div>
	);
}

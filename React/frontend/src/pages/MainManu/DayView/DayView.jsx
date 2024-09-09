import { useContext, useEffect, useState } from "react";
import "./dayView.css";
import UserContext from "../../../context/UserContext";
import WorkoutDayViewItem from "../../../components/WorkoutDayViewItem";
import userRequests from "../../../api/userRequests";
import Modal from "../../../components/Modal/Modal";

export default function DayView({ date }) {
	const { user, updateUser } = useContext(UserContext);
	const [workoutData, setWorkoutData] = useState(null);
	const [popUpContent, setPopUpContent] = useState(<></>);

	useEffect(() => {
		fetchData();
	}, [date]);

	const submitUpdate = async (updatedWorkoutObject) => {
		for (let i = 0; i < user.workouts.length; i++) {
			if (user.workouts[i]._id == updatedWorkoutObject._id) {
				user.workouts[i] = updatedWorkoutObject;
				break;
			}
		}

		const res = await userRequests.updateUserWorkout(
			user,
			updatedWorkoutObject
		);

		if (res.status == 200) {
			updateUser(res.data.data);
			setPopUpContent(
				<Modal
					message="המשימה עודכנה בהצלחה"
					close={() => setPopUpContent(<></>)}
				/>
			);
		}
	};

	const fetchData = () => {
		const dayWorkouts = user.workouts.filter((workout) => {
			return (
				new Date(date).toISOString().slice(0, 10) ===
				new Date(workout.date).toISOString().slice(0, 10)
			);
		});
		setWorkoutData(dayWorkouts || []);
	};

	const showWorkoutData = () => {
		if (!workoutData || workoutData.length == 0) {
			return (
				<div className="workoutDataContainer">
					<p>אין אימונים בתאריך זה</p>
				</div>
			);
		}

		return (
			<div className="workoutDataContainer">
				{workoutData.map((workout, index) => {
					return (
						<WorkoutDayViewItem
							key={index}
							workout={workout}
							submitUpdate={submitUpdate}
						/>
					);
				})}
			</div>
		);
	};

	return (
		<div className="dayViewContainer">
			{popUpContent}
			<h4>האימון הקרוב: {date.toLocaleDateString("he-IL")}</h4>
			{showWorkoutData()}
		</div>
	);
}

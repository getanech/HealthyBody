import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import userRequests from "../../api/userRequests";

import { LineChart } from "@mui/x-charts";

export default function Statistics() {
	const { user } = useContext(UserContext);

	const today = new Date();
	const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
	const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);

	// const monthDates = [];
	// for (let d = firstDayOfMonth; d <= lastDayOfMonth; d.setDate(d.getDate() + 1)) {
	// 	monthDates.push(`${d.getDate()}.${d.getMonth() + 1}`);
	// }

	const [startDate, setStartDate] = useState(firstDayOfMonth);
	const [endDate, setEndDate] = useState(lastDayOfMonth);

	const [workoutData, setWorkoutData] = useState(null);

	const fetchData = async () => {
		try {
			const response = await userRequests.getUserWorkouts(user._id);
			const periodWorkouts = response.data.data.filter((workout) => {
				const date = new Date(workout.date);
				return date >= startDate && date <= endDate;
			});
			setWorkoutData(
				periodWorkouts.sort((a, b) => new Date(a.date) - new Date(b.date))
			);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="menuContainer">
			{/* Weight chart */}
			{workoutData && (
				<LineChart
					xAxis={[
						{
							title: "תאריך",
							data: workoutData
								? workoutData.map((workout) => {
										const xDataPoint = new Date(workout.date);
										const label =
											xDataPoint.toLocaleDateString("he-IL").split(".")[0] +
											"." +
											xDataPoint.toLocaleDateString("he-IL").split(".")[1];

										return label.toString();
								  })
								: [],
						},
					]}
					series={[
						{
							data: workoutData.map((workout) => {
								console.log(
									"workout.currentWeight",
									new Date(workout.date).toLocaleDateString("he-IL"),
									workout.currentWeight
								);
								return workout.currentWeight;
							}),
							label: "משקל",
						},
					]}
					width={700}
					height={400}
				/>
			)}
		</div>
	);
}

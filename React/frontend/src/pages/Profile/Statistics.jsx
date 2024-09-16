import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import userRequests from "../../api/userRequests";

import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts";
import { Title } from "chart.js";

export default function Statistics() {
	const { user } = useContext(UserContext);

	const today = new Date();
	const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
	console.log("firstDayOfMonth", firstDayOfMonth);
	const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
	console.log("lastDayOfMonth", lastDayOfMonth);

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
					// xAxis={[
					// 	{
					// 		data: workoutData
					// 			? workoutData.map((workout) => {
					//                     const xDataPoint = new Date(workout.date)
					// 					return new Date(workout.date);
					// 			  })
					// 			: [],
					// 	},
					// ]}
					series={[
						{
							// data: [2, 5.5, 2, 8.5, 1.5, 5],
							// data: workoutData ? workoutData.map((workout) => workout.weight) : [],
							data: workoutData.map((workout) => {
								const xDataPoint = new Date(workout.date);
								return new Date(workout.date);
							}),
						},
						{
							data: workoutData.map((workout) => {
								return workout.currentWeight;
							}),
						},
					]}
					width={700}
					height={400}
				/>
			)}
		</div>
	);
}

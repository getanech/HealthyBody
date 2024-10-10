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

	const [periodWorkoutData, setPeriodWorkoutData] = useState(null);

	const [fullWorkoutData, setFullWorkoutData] = useState(null);

	const fetchData = async () => {
		try {
			const response = await userRequests.getUserWorkouts(user._id);

			setFullWorkoutData(response.data.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (!fullWorkoutData) {
			return;
		}
		const periodWorkouts = fullWorkoutData.filter((workout) => {
			const date = new Date(workout.date);
			return date >= startDate && date <= endDate;
		});
		setPeriodWorkoutData(
			periodWorkouts.sort((a, b) => new Date(a.date) - new Date(b.date))
		);
	}, [startDate, endDate, fullWorkoutData]);
	+useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="menuContainer statistics">
			<div className="dateRange">
				<label>
					<input
						type="date"
						// defaultValue={startDate}
						value={startDate}
						onChange={(e) =>
							setStartDate(e.target.valueAsDate || e.target.value)
						}
					/>
					:תאריך התחלה
				</label>
				<label>
					<input
						type="date"
						// defaultValue={endDate}
						value={endDate.toLocaleDateString("he-IL")}
						onChange={(e) => setEndDate(e.target.valueAsDate || e.target.value)}
					/>
					:תאריך סיום
				</label>
			</div>

			{periodWorkoutData && (
				<LineChart
					className="lineChart"
					colors={["#060000"]}
					xAxis={[
						{
							title: "תאריך",
							scaleType: "point",
							data: periodWorkoutData
								? periodWorkoutData.map((workout) => {
										if (workout.currentWeight === -1) {
											return "-";
										}
										const xDataPoint = new Date(workout.date);
										const label =
											xDataPoint.toLocaleDateString("he-IL").split(".")[0] +
											"." +
											xDataPoint.toLocaleDateString("he-IL").split(".")[1];

										return label;
								  })
								: [],
						},
					]}
					series={[
						{
							data: periodWorkoutData.map((workout) => {
								if (workout.currentWeight === -1) {
									return null;
								}
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

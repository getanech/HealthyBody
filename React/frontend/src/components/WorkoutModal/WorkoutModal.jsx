import React, { useEffect, useRef, useState } from "react";
import "./Workout.css";
import NewExerciseRow from "../NewExerciseRow";
import exerciseRequests from "../../api/exerciseRequests";

export default function WorkoutModal({ workout, close, addToMyWorkouts }) {
	const [editMode, setEditMode] = useState(false);
	const [workoutData, setWorkoutData] = useState(workout);
	const [defaultExercises, setDefaultExercises] = useState([
		...workout.exercises,
	]);

	const [allExerciseData, setAllExerciseData] = useState([]);

	const getAllExercises = async () => {
		const response = await exerciseRequests.getExercises();
		setAllExerciseData(response.data.data);
	};

	useEffect(() => {
		getAllExercises();
	}, []);

	const submitExercise = (exercise, reps) => {
		const newExercises = [...workoutData.exercises, { exercise, reps }];
		setWorkoutData({
			...workoutData,
			exercises: newExercises,
		});
		setEditMode(false);
	};

	const beginRef = useRef(null);
	const endRef = useRef(null);

	const [weekDaySelected, setWeekDaySelected] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	const [headline, setHeadline] = useState(workout.name);

	// useEffect(() => {
	// 	console.log("workoutData", workoutData.exercises);
	// }, [workoutData]);

	const toggleWeekDaySelected = (index) => {
		const newWeekDaySelected = [...weekDaySelected];
		newWeekDaySelected[index] = !newWeekDaySelected[index];
		setWeekDaySelected(newWeekDaySelected);
	};

	// useEffect(() => {
	// 	gatherSelectedDates();
	// }, [weekDaySelected]);

	const renderWorkoutEventPanel = () => {
		return (
			<div className="workoutEventPanel">
				<div className="dateInputsContainer">
					<div className="dateInput">
						<h3>Begin Date:</h3>
						<input onChange={gatherSelectedDates} ref={beginRef} type="date" />
					</div>
					<div className="dateInput">
						<h3>End Date:</h3>
						<input onChange={gatherSelectedDates} ref={endRef} type="date" />
					</div>
				</div>
				<div className="weekDaysContainer">
					<h3>Choose Week Days:</h3>

					<div className="weekDays">
						<label>Sunday</label>
						<label>Monday</label>
						<label>Tuesday</label>
						<label>Wednesday</label>
						<label>Thursday</label>
						<label>Friday</label>
						<label>Saturday</label>
						<input
							type="checkbox"
							checked={weekDaySelected[0]}
							onChange={() => toggleWeekDaySelected(0)}
						/>
						<input
							type="checkbox"
							checked={weekDaySelected[1]}
							onChange={() => toggleWeekDaySelected(1)}
						/>
						<input
							type="checkbox"
							checked={weekDaySelected[2]}
							onChange={() => toggleWeekDaySelected(2)}
						/>
						<input
							type="checkbox"
							checked={weekDaySelected[3]}
							onChange={() => toggleWeekDaySelected(3)}
						/>
						<input
							type="checkbox"
							checked={weekDaySelected[4]}
							onChange={() => toggleWeekDaySelected(4)}
						/>
						<input
							type="checkbox"
							checked={weekDaySelected[5]}
							onChange={() => toggleWeekDaySelected(5)}
						/>
						<input
							type="checkbox"
							checked={weekDaySelected[6]}
							onChange={() => toggleWeekDaySelected(6)}
						/>
					</div>
				</div>
			</div>
		);
	};

	const gatherSelectedDates = () => {
		const beginDate = new Date(beginRef.current.value);
		const endDate = new Date(endRef.current.value);
		const selectedDates = [];
		while (beginDate <= endDate) {
			if (weekDaySelected[beginDate.getDay()]) {
				selectedDates.push(new Date(beginDate));
			}
			beginDate.setDate(beginDate.getDate() + 1);
		}

		setWorkoutData({
			...workoutData,
			dates: selectedDates,
		});
	};

	const showExerciseInfo = () => {
		return (
			<div className="exerciseInfoContainer">
				{editMode && (
					<NewExerciseRow
						exerciseData={allExerciseData}
						submitExercise={submitExercise}
					/>
				)}
				{workoutData.exercises.map((exObject, index) => {
					return (
						<div className="exerciseInfoGrid" key={index}>
							<p>{exObject.exercise.name}</p>
							<div className="exerciseRepContainer">
								{editMode && (
									<button
										onClick={() =>
											changeExerciseReps(exObject, exObject.reps - 1)
										}
									>
										-
									</button>
								)}
								<p>{exObject.reps}</p>
								{editMode && (
									<button
										onClick={() =>
											changeExerciseReps(exObject, exObject.reps + 1)
										}
									>
										+
									</button>
								)}
							</div>
							<p>{exObject.exercise.muscleGroups.join(", ")}</p>
							{editMode && (
								<button
									className="deleteBtn"
									onClick={() => deleteExercise(index)}
								>
									✖️
								</button>
							)}
						</div>
					);
				})}
			</div>
		);
	};

	const changeExerciseReps = (exObject, reps) => {
		const newExercises = [...workoutData.exercises];
		newExercises[newExercises.indexOf(exObject)].reps = reps;

		setWorkoutData({
			...workoutData,
			exercises: newExercises,
		});
	};

	const deleteExercise = (index) => {
		const newExercises = [...workoutData.exercises];
		newExercises.splice(index, 1);
		setWorkoutData({
			...workoutData,
			exercises: newExercises,
		});
	};

	const handleSubmit = async () => {
		await addToMyWorkouts(workoutData);
		close();
	};

	const renderHeadline = () => {
		if (editMode) {
			return (
				<input
					type="text"
					className="headline"
					// defaultValue={headline}
					value={headline}
					onChange={(e) => setHeadline(e.target.value)}
				/>
			);
		}

		return <h1 className="headline">{headline}</h1>;
	};

	const resetWorkoutData = () => {
		setWorkoutData({ workout, exercises: defaultExercises });
		setHeadline(workout.name);
	};

	return (
		<div className="WorkoutModal">
			<div className="WorkoutPanel">
				<div className="workoutInfo">
					<div className="workoutHeader">
						{renderHeadline()}
						<div className="workoutHeadlineActions">
							<button onClick={() => setEditMode(!editMode)}>Edit</button>
							<button onClick={resetWorkoutData}>Reset</button>
						</div>
					</div>
					{showExerciseInfo()}
				</div>
				{renderWorkoutEventPanel()}
				<div className="buttonPanel">
					<button onClick={handleSubmit}>Add to my workouts</button>
					<button onClick={close}>Close</button>
				</div>
			</div>
		</div>
	);
}

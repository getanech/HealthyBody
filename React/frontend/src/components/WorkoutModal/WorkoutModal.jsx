import React, { useRef, useState } from "react";
import "./Workout.css";

export default function WorkoutModal({ workout, close, addToMyWorkouts }) {
	const [editMode, setEditMode] = useState(false);
	const [workoutData, setWorkoutData] = useState(workout);

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

	const toggleWeekDaySelected = (index) => {
		const newWeekDaySelected = [...weekDaySelected];
		newWeekDaySelected[index] = !newWeekDaySelected[index];
		setWeekDaySelected(newWeekDaySelected);
	};

	const renderWorkoutEventPanel = () => {
		return (
			<div className="workoutEventPanel">
				<div className="dateInputsContainer">
					<div className="dateInput">
						<h3>Begin Date:</h3>
						<input ref={beginRef} type="date" />
					</div>
					<div className="dateInput">
						<h3>End Date:</h3>
						<input ref={endRef} type="date" />
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
				{workoutData.exercises.map((exObject, index) => {
					return (
						<div className="exerciseInfoGrid" key={index}>
							<p>{exObject.exercise.name}</p>
							<p>{exObject.reps}</p>
							<p>{exObject.exercise.muscleGroups.join(", ")}</p>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div className="WorkoutModal">
			<div className="WorkoutPanel">
				<div className="workoutInfo">
					<div className="workoutHeader">
						<h1 className="h1">{workoutData.name}</h1>
						<button onClick={() => setEditMode(!editMode)}>Edit</button>
					</div>
					{showExerciseInfo()}
				</div>
				{renderWorkoutEventPanel()}
				<div className="buttonPanel">
					<button onClick={() => addToMyWorkouts(workoutData)}>
						Add to my workouts
					</button>

					<button onClick={close}>Close</button>
				</div>
			</div>
		</div>
	);
}

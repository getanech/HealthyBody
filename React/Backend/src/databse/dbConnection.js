const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");
const ExerciseModel = require("../models/ExerciseModel");
const WorkoutModel = require("../models/WorkoutModel");
const UserWorkoutModel = require("../models/UserWorkoutModel");

const defaultExercise = require("../mockData/ExerciseData");
const exerciseService = require("../services/ExerciseService");
const WorkoutService = require("../services/WorkoutService");
const defaultWorkouts = require("../mockData/WorkoutData");
const UserWorkoutSchema = require("../models/UserWorkoutModel");

const uri = "1234";
const connectToServer = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI || uri, {});
		console.log("[DATABASE]\t\tDATABASE CONNECTED");
		console.log("[DATABASE]\t\tMODELS:");
		for (let name in mongoose.connection.collections) {
			console.log(`\t\t\t\t${name}`);
		}
		loadMockData();
	} catch (error) {
		console.error(error);
	}
};

const loadMockData = async () => {
	// resetAllExerciseReps();
	// await addDefaultExercises();
	// const res = await exerciseService.getAllExercises()
	// console.log(res)
	// await WorkoutService.deleteAllWorkouts();
	// const res = await addDefaultWorkouts();
};
async function addDefaultWorkouts() {
	for (let workout of defaultWorkouts) {
		const res = await WorkoutService.createWorkout(workout);
	}
}
async function addDefaultExercises() {
	for (let ex of defaultExercise) {
		const res = await exerciseService.createExercise(ex);
	}
}

// const resetAllExerciseReps = async () => {
// 	const allWorkouts = await WorkoutService.getAllWorkouts();
// 	workoutObject = allWorkouts.data[0];

// 	for (const exercise of workoutObject.exercises) {
// 		// console.log("exercise", exercise);
// 		const response = await WorkoutService.updateExerciseReps({
// 			params: { workoutId: workoutObject._id, exerciseId: exercise._id },
// 			body: { reps: 12 },
// 		});
// 		// console.log(response);
// 	}
// 	// for (const workout of allWorkouts.data) {
// 	// 	for (const exercise of workout.exercises) {
// 	// 		const response = await WorkoutService.updateExerciseReps({
// 	// 			params: { workoutId: workout._id, exerciseId: exercise._id },
// 	// 			body: { reps: 12 },
// 	// 		});
// 	// 		console.log(response);
// 	// 	}
// 	// }
// };

module.exports = { connectToServer };

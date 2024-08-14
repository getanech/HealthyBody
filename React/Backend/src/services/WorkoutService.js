const Workout = require("../models/WorkoutModel.js");

const WorkoutService = {
	createWorkout: async (data) => {
		const workout = new Workout(data);
		const response = await workout.save();

		return workout;
	},

	updateExerciseReps: async (req, res) => {
		try {
			const workoutId = req.params.workoutId;
			const exerciseId = req.params.exerciseId;
			const reps = req.body.reps;
			const workoutObj = await Workout.findOne({ _id: workoutId });
			for (const exercise of workoutObj.exercises) {
				if (exercise == exerciseId) {
					console.log("exercise", exercise);
					exercise.reps = reps;
					await exercise.save();
				}
			}

			const response = await workoutObj.save();
			console.log("response", response);
			if (response) {
				return {
					status: 200,
					message: "Workout updated successfully",
					data: response,
				};
			} else {
				return {
					status: 404,
					message: "Workout not found",
					data: null,
				};
			}
		} catch (error) {
			console.log("error", error);
		}
	},

	getAllWorkouts: async (req, res) => {
		const response = await Workout.find().populate({
			path: "exercises",
			populate: {
				path: "exercise",
				model: "exercise",
			},
		});
		return {
			status: 200,
			message: "Workouts fetched successfully",
			data: response,
		};
	},

	deleteAllWorkouts: async (req, res) => {
		const response = await Workout.deleteMany();
		return {
			status: 200,
			message: "Workouts deleted successfully",
			data: response,
		};
	},
};

module.exports = WorkoutService;

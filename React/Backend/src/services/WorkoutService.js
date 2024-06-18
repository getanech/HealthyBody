const Workout = require("../models/WorkoutModel.js");

const WorkoutService = {
	createWorkout: async (data) => {
		const workout = new Workout(data);
		const response = await workout.save();
		console.log("response", response);
		return workout;
	},

	getAllWorkouts: async (req, res) => {
		const response = await Workout.find().populate('exercises');
		return {
			status: 200,
			message: "Workouts fetched successfully",
			data: response,
		};
	},
};

module.exports = WorkoutService;

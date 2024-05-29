const Workout = require("../models/WorkoutModel.js")

const WorkoutService = {
	createWorkout: async (data) => {
		const workout = new Workout (data);
		const response = await workout.save();
		console.log("response", response);
		return workout;
	},

	getAllWorkout: async (req, res) => {
		const response = await Workout.find();
        return response
	},
};

module.exports = WorkoutService;
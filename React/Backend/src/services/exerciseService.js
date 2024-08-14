const Exercise = require("../models/ExerciseModel.js");

const exerciseService = {
	createExercise: async (data) => {
		const exercise = new Exercise(data);
		const response = await exercise.save();
		return exercise;
	},

	getAllExercises: async (req, res) => {
		try {
			const response = await Exercise.find();
			if (response) {
				return {
					status: 200,
					message: "Exercises fetched successfully",
					data: response,
				};
			}
			return {
				status: 404,
				message: "Exercises not found",
				data: null,
			};
		} catch (error) {
			console.log(error);
			return {
				status: 500,
				message: "Error retrieving exercises",
				data: null,
			};
		}
	},
};

module.exports = exerciseService;

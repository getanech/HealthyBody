const Excercise = require("../models/ExcerciseModel.js")

const exerciseService = {
	createExercise: async (data) => {
		const excercise = new Excercise (data);
		const response = await excercise.save();
		console.log("response", response);
		return excercise;
	},

	

	getAllExercises: async (req, res) => {
		const response = await Excercise.find();
        return response
	},
};

module.exports = exerciseService;
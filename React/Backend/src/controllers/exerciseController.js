const exerciseService = require("../services/exerciseService");

const exerciseController = {
	getAllExercises: async (req, res) => {
		try {
			const response = await exerciseService.getAllExercises();
			return res
				.status(response.status)
				.json({ message: response.message, data: response.data });
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ message: "Error retrieving exercises", data: null });
		}
	},
	createExercise: async (req, res) => {
		try {
			const response = await exerciseService.createExercise(req.body);
			return res
				.status(response.status)
				.json({ message: response.message, data: response.data });
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ message: "Error creating exercise", data: null });
		}
	},
	updateExercise: async (req, res) => {
		try {
			const response = await exerciseService.updateExerciseById(
				req.params.id,
				req.body
			);
			return res
				.status(response.status)
				.json({ message: response.message, data: response.data });
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ message: "Error updating exercise", data: null });
		}
	},
	deleteExercise: async (req, res) => {
		try {
			const response = await exerciseService.deleteExerciseById(req.params.id);
			return res
				.status(response.status)
				.json({ message: response.message, data: response.data });
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ message: "Error deleting exercise", data: null });
		}
	},
};

module.exports = exerciseController;

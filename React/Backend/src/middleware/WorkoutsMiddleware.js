const WorkoutService = require("../services/WorkoutService");

const WorkoutsMiddleware = {
	getAllWorkouts: async (req, res, next) => {
		const response = await WorkoutService.getAllWorkouts();
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},
};

module.exports = WorkoutsMiddleware;

const userServices = require("../services/UserServices");
const tokenUtil = require("../utils/tokenUtil");

const UsersMiddleware = {
	getUser: async (req, res, next) => {
		const response = await userServices.getUser(req, res, next);
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},

	register: async (req, res, next) => {
		const response = await userServices.register(req, res, next);
		return res.status(200).json({ response: response });
	},

	login: async (req, res, next) => {
		const response = await userServices.login(req, res, next);
		if (response.success) {
			const token = tokenUtil.generateToken(response.data);
			response.data.toJ;
		}
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},

	// Check if user is logged in
	checkLoggedIn: async (req, res, next) => {
		if (req.user) {
			return next();
		}
		return res.status(401).json({ message: "You are not logged in" });
	},

	// Check if user is an admin
	checkAdmin: async (req, res, next) => {
		if (req.user && req.user.role === "admin") {
			return next();
		}
		return res
			.status(403)
			.json({ message: "You are not authorized to access this route" });
	},

	addUserWorkout: async (req, res, next) => {
		const response = await userServices.addWorkout(req, res, next);
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},

	getUserWorkouts: async (req, res, next) => {
		console.log("req", req.query);

		const response = await userServices.getUserWorkouts(req, res, next);

		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},

	removeUserWorkout: async (req, res, next) => {
		const response = await userServices.removeUserWorkout(req, res, next);
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},

	updateUser: async (req, res, next) => {
		const response = await userServices.updateUser(req, res, next);
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},

	validatePassword: async (req, res, next) => {
		const { userId, password } = req.query;
		const response = await userServices.validatePassword(userId, password);
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},

	changePassword: async (req, res, next) => {
		const { userId, password } = req.body;
		const response = await userServices.changePassword(userId, password);
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},

	updateUserWorkout: async (req, res, next) => {
		const response = await userServices.updateUserWorkout(req, res, next);
		return res
			.status(response.status)
			.json({ message: response.message, data: response.data });
	},
};

module.exports = UsersMiddleware;

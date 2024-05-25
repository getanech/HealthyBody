const userServices = require("../services/UserServices");
const tokenUtil = require("../utils/tokenUtil");

const UsersMiddleware = {
	register: async (req, res, next) => {
		const response = await userServices.register(req, res, next);
		return res.status(200).json({ response: response });
	},

	login: async (req, res, next) => {
		const response = await userServices.login(req, res, next);
		console.log("response", response);
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
};

module.exports = UsersMiddleware;

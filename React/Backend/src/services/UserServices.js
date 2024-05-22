const User = require("../models/UserModel.js");
const userServices = {
	register: async (req, res) => {
		const user = new User(req.body);
		const response = await user.save();
		console.log("response", response);
		return user;
	},

	login: async (req, res) => {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return {
				success: false,
				message: "User with this email does not exist",
				status: 400,
				data: null,
			};
		}

		if (user.password !== password) {
			return {
				success: false,
				message: "Incorrect password",
				status: 400,
				data: null,
			};
		}

		return {
			success: true,
			message: "User logged in successfully",
			status: 200,
			data: user,
		};
	},
};

module.exports = userServices;

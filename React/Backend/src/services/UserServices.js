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

	addWorkout: async (req, res) => {
		try {
			const user = await User.findById(req.query.userId);

			if (!user.workouts) user.workouts = [];
			await user.save();

			user.workouts.push(req.body.workout);
			await user.save();

			return {
				success: true,
				message: "Workout added successfully",
				status: 200,
				data: user,
			};
		} catch (error) {
			console.log("error", error);
			return {
				success: false,
				message: "Error adding workout",
				status: 500,
				data: null,
			};
		}
	},

	getUserWorkouts: async (req, res) => {
		try {
			const user = await User.findById(req.query.userId);
			if (!user) {
				return {
					success: false,
					message: "User not found",
					status: 404,
					data: null,
				};
			}

			return {
				success: true,
				message: "User workouts retrieved successfully",
				status: 200,
				data: user.workouts,
			};
		} catch (error) {
			console.log("error", error);
			return {
				success: false,
				message: "Error getting user workouts",
				status: 500,
				data: null,
			};
		}
	},

	removeUserWorkout: async (req, res) => {
		try {
			const user = await User.findById(req.query.userId);
			if (!user) {
				return {
					success: false,
					message: "User not found",
					status: 404,
					data: null,
				};
			}
			const { workoutId } = req.query;
			console.log("workoutId", workoutId);
			console.log("user.workouts", user.workouts);
			user.workouts = user.workouts.filter((workout) => {
				// console.log("workout", workout);
				return workout.toString() !== workoutId;
			});
			await user.save();
			return {
				success: true,
				message: "Workout removed successfully",
				status: 200,
				data: user,
			};
		} catch (error) {
			console.log("error", error);
			return {
				success: false,
				message: "Error removing workout",
				status: 500,
				data: null,
			};
		}
	},
};

module.exports = userServices;

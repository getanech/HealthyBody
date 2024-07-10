const User = require("../models/UserModel.js");
const userServices = {
	register: async (req, res) => {
		const user = new User(req.body);
		return await user.save();
	},

	login: async (req, res) => {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user || user.password !== password) {
			return {
				success: false,
				message: !user
					? "User with this email does not exist"
					: "Incorrect password",
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

	getUser: async (req, res) => {
		try {
			// const user = await User.findById(req.query.userId);
			const user = await User.findById(req.query.userId).populate(
				"workouts.exercises.exercise"
			);
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
				message: "User retrieved successfully",
				status: 200,
				data: user,
			};
		} catch (error) {
			console.log("error", error);
			return {
				success: false,
				message: "Error retrieving user",
				status: 500,
				data: null,
			};
		}
	},

	addWorkout: async (req, res) => {
		try {
			const user = await User.findByIdAndUpdate(
				req.query.userId,
				{ $push: { workouts: req.body.workout } },
				{ new: true }
			);

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
			const user = await User.findById(req.query.userId, { workouts: 1 });
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
			const user = await User.findByIdAndUpdate(
				req.query.userId,
				{ $pull: { workouts: { _id: req.query.workoutId } } },
				{ new: true }
			);

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

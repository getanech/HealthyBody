const User = require("../models/UserModel.js");
const UserWorkout = require("../models/UserWorkoutModel.js");
const Exercise = require("../models/ExerciseModel.js");
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

			const user = await User.findById(req.query.userId).populate({
				path: "workouts",
				model: "UserWorkout",
				populate: {
					path: "exercises.exercise",
					model: "exercise",
				},
			});

			if (!user) {
				return {
					success: false,
					message: "User not found",
					status: 404,
					data: null,
				};
			}
			console.log("user", user);

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
			const user = await User.findOne({ _id: req.query.userId }).populate(
				"workouts"
			);
			if (!user) {
				return {
					success: false,
					message: "User not found",
					status: 404,
					data: null,
				};
			}

			for (let datePtr of req.body.workout.dates) {
				const userWorkout = await UserWorkout.create({
					baseWorkout: req.body.workout._id,
					exercises: req.body.workout.exercises,
					name: req.body.workout.name,
					date: datePtr,
				});

				user.workouts.push(userWorkout);
			}

			await user.save();
			console.log("user", user);

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
			const user = await User.findById(req.query.userId).populate("workouts");

			if (!user) {
				return {
					success: false,
					message: "User not found",
					status: 404,
					data: null,
				};
			}

			if (!user.workouts) user.workouts = [];
			await user.save();

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

	updateUser: async (req, res) => {
		try {
			const user = await User.findByIdAndUpdate(req.query.userId, {
				$set: req.body,
			}).populate("workouts.exercises.exercise");

			if (!user) {
				return {
					success: false,
					message: "User not found",
					status: 404,
					data: null,
				};
			}

			req.body.workouts.map((workout, index) => {
				user.workouts[index].exercises.map((exercise, exIndex) => {
					exercise.reps = req.body.workouts[index].exercises[exIndex].reps;
					if (workout.exercises[exIndex].exercise.weight) {
						user.workouts[index].exercises[exIndex].exercise.weight =
							workout.exercises[exIndex].exercise.weight;
					}
				});
			});
			await user.save();
			const updatedUser = await User.findById(req.query.userId);
			console.log("updatedUser", updatedUser);

			return {
				success: true,
				message: "User updated successfully",
				status: 200,
				data: updatedUser,
			};
		} catch (error) {
			console.log("error", error);
			return {
				success: false,
				message: "Error updating user",
				status: 500,
				data: null,
			};
		}
	},

	validatePassword: async (userId, password) => {
		try {
			const user = await User.findById(userId);

			if (!user) {
				return {
					success: false,
					message: "User not found",
					status: 404,
					data: null,
				};
			}
			// const isPasswordValid = await bcrypt.compare(password, user.password);
			return {
				success: true,
				message: "User validated successfully",
				status: 200,
				data: user.password === password,
			};
		} catch (error) {
			console.log("error", error);
			return {
				success: false,
				message: "Error validating user",
				status: 500,
				data: null,
			};
		}
	},

	changePassword: async (userId, password) => {
		try {
			const user = await User.findById(userId);
			if (!user) {
				return {
					success: false,
					message: "User not found",
					status: 404,
					data: null,
				};
			}

			user.password = password;
			await user.save();

			return {
				success: true,
				message: "Password changed successfully",
				status: 200,
				data: true,
			};
		} catch (error) {
			console.log("error", error);
			return {
				success: false,
				message: "Error changing password",
				status: 500,
				data: null,
			};
		}
	},
};

module.exports = userServices;

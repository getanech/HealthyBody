import axios from "axios";
import parameters from "./config";

const userRequests = {
	getUserInfo: async (userId) => {
		const response = await axios.get(parameters.baseUrl + "/users", {
			params: {
				userId: userId,
			},
		});
		return response;
	},
	register: async (data) => {
		const response = await axios.post("http://localhost:5000/users", data);
		return response;
	},
	login: async (data) => {
		try {
			console.log("data", data);
			const response = await axios.post(
				"http://localhost:5000/users/login",
				data
			);
			return response;
		} catch (error) {
			console.log("LOGIN ERROR", error);
			return error.response;
		}
	},

	addUserWorkout: async (userId, workout) => {
		const response = await axios.post(
			"http://localhost:5000/users/workouts",
			{
				workout,
			},
			{
				params: {
					userId: userId,
				},
			}
		);
		return response;
	},
	/**
	 * Retrieves the workouts associated with a specific user.
	 *
	 * @param {string} userId - The ID of the user.
	 * @return {Promise<Object>} A promise that resolves to the response containing the user's workouts.
	 */
	getUserWorkouts: async (userId) => {
		const url = `${parameters.baseUrl}/users/workouts`;
		const response = await axios.get(url, { params: { userId } });
		return response;
	},

	removeUserWorkout: async (userId, workoutId) => {
		const response = await axios.delete(
			parameters.baseUrl + "/users" + "/workouts",
			{
				params: {
					userId: userId,
					workoutId: workoutId,
				},
			}
		);
		return response;
	},

	updateUser: async (user) => {
		const response = await axios.put(parameters.baseUrl + "/users", user, {
			params: {
				userId: user._id,
			},
		});
		return response;
	},

	validatePassword: async (user, password) => {
		const response = await axios.get(parameters.baseUrl + "/users/validate", {
			params: {
				userId: user._id,
				password: password,
			},
		});
		return response;
	},

	changePassword: async (user, password) => {
		const response = await axios.put(parameters.baseUrl + "/users/password", {
			userId: user._id,
			password: password,
		});
		return response;
	},

	updateUserWorkout: async (user, workout) => {
		const response = await axios.put(parameters.baseUrl + "/users/workouts", {
			userId: user._id,
			workout: workout,
		});
		return response;
	},
};
export default userRequests;

import axios from "axios";

const userRequests = {
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
};
export default userRequests;

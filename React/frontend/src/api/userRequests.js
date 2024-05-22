import axios from "axios";

const userRequests = {
	register: async (data) => {
		const response = await axios.post("http://localhost:5000/users", data);
		return response;
	},
	login: async (data) => {
		try {
			const response = await axios.post(
				"http://localhost:5000/users/login",
				data
			);
			return response;
		} catch (error) {
			console.log(error);
			return error.response;
		}
	},
};
export default userRequests;

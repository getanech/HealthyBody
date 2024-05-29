import axios from "axios";
import parameters from "./config";

const workoutsApi = {
	getWorkouts: async () => {
		const response = await axios.get(parameters.baseUrl + "/workouts");
		return response;
	},
};

export default workoutsApi;

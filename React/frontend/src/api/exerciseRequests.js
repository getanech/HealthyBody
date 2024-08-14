import axios from "axios";

const exerciseRequests = {
	getExercises: async () => {
		const response = await axios.get("http://localhost:5000/exercises");
		return response;
	},
	getExercise: async (id) => {
		const response = await axios.get(`http://localhost:5000/exercises/${id}`);
		return response;
	},
	//   createExercise: async (data) => {
	//     const response = await axios.post(
	//       "http://localhost:5000/exercises",
	//       data
	//     );
	//     return response;
	//   },
	//   updateExercise: async (id, data) => {
	//     const response = await axios.put(
	//       `http://localhost:5000/exercises/${id}`,
	//       data
	//     );
	//     return response;
	//   },
	//   deleteExercise: async (id) => {
	//     const response = await axios.delete(
	//       `http://localhost:5000/exercises/${id}`
	//     );
	//     return response;
	//   },
};

export default exerciseRequests;

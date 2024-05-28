const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");
const ExcerciseModel = require("../models/ExcerciseModel");
const WorkoutModel = require("../models/WorkoutModel");

const defaultExercise = require("../mockData/ExerciseData");
const exerciseService = require("../services/ExcerciseService");




const uri = "1234";
const connectToServer = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI || uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("[DATABASE]\t\tDATABASE CONNECTED");
		console.log("[DATABASE]\t\tMODELS:");
		for (let name in mongoose.connection.collections) {
			console.log(`\t\t\t\t${name}`);
		}
		loadMockData()
	} catch (error) {
		console.error(error);
	}
};

const loadMockData = async () => {
	
	// await addDefaultExercises();
	// const res = await exerciseService.getAllExercises()
	// console.log(res)
}

async function addDefaultExercises() {
	for (let ex of defaultExercise) {
		const res = await exerciseService.createExercise(ex);
	}
}

module.exports = { connectToServer };



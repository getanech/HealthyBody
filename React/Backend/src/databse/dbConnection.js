const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");

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
	} catch (error) {
		console.error(error);
	}
};

module.exports = { connectToServer };

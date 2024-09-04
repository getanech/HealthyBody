const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	muscleGroups: [
		{
			type: String,
		},
	],
});

module.exports = mongoose.model("exercise", exercisesSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userWorkoutSchema = new Schema({
	baseWorkout: {
		type: Schema.Types.ObjectId,
		ref: "Workout",
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	exercises: [
		{
			exercise: {
				type: Schema.Types.ObjectId,
				ref: "exercise",
			},
			reps: Number,
			weight: Number,
		},
	],
	date: {
		type: Date,
		required: true,
	},
	currentWeight: {
		type: Number,
		default: -1,
	},
});

module.exports = mongoose.model("UserWorkout", userWorkoutSchema);

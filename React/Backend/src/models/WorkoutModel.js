const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema({
	name: String,
	exercises: [
		{
			exercise: {
				type: Schema.Types.ObjectId,
				ref: "exercise",
			},
			reps: Number,
		},
	],
	default: {
		type: Boolean,
		default: false,
	},
});

const WorkoutModel = mongoose.model("Workout", workoutSchema);

module.exports = WorkoutModel;

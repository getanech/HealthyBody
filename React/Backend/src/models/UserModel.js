const mongoose = require("mongoose");
const UserWorkoutModel = require("./UserWorkoutModel");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	sex: {
		type: String,
		enum: ["male", "female"],
		required: true,
	},
	weight: {
		type: [Number],
		required: true,
	},
	height: {
		type: Number,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	workouts: [
		{
			type: Schema.Types.ObjectId,
			ref: "UserWorkout",
			default: [],
		},
	],
	subscriptionEnd: {
		type: Date,
		default: Date.now(),
	},
	active: {
		type: Boolean,
		default: true,
	},
});

module.exports = mongoose.model("User", userSchema);

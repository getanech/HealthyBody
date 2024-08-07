const mongoose = require("mongoose");
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
	active: {
		type: Boolean,
		default: true,
	},
	workouts: [
		{
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
				},
			],
			dates: [
				{
					type: Date,
					required: true,
				},
			],
			active: {
				type: Boolean,
				default: true,
			},
		},
	],
});

module.exports = mongoose.model("User", userSchema);

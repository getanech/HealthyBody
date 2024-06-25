const mongoose = require("mongoose");

const defaultWorkouts = [
	{
		name: "Full Body Workout",
		exercises: [
			{
				exercise: new mongoose.Types.ObjectId("665497d259bcfc3b02c54803"),
				reps: 12,
			}, // Push Up
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c5480f"),
				reps: 12,
			}, // Deadlift
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54811"),
				reps: 12,
			}, // Squat
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c5480d"),
				reps: 12,
			}, // Pull Up
			{
				exercise: new mongoose.Types.ObjectId("665497d359bcfc3b02c5480b"),
				reps: 12,
			}, // Bicep Curl
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54815"),
				reps: 12,
			}, // Tricep Dips
		],
		default: true,
	},
	{
		name: "Upper Body Workout",
		exercises: [
			{
				exercise: new mongoose.Types.ObjectId("665497d259bcfc3b02c54803"),
				reps: 12,
			}, // Push Up
			{
				exercise: new mongoose.Types.ObjectId("665497d359bcfc3b02c54806"),
				reps: 12,
			}, // Bench Press
			{
				exercise: new mongoose.Types.ObjectId("665497d359bcfc3b02c54809"),
				reps: 12,
			}, // Shoulder Press
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c5480d"),
				reps: 12,
			}, // Pull Up
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54815"),
				reps: 12,
			}, // Tricep Dips
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54817"),
				reps: 12,
			}, // Lat Pulldown
		],
		default: true,
	},
	{
		name: "Lower Body Workout",
		exercises: [
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c5480f"),
				reps: 12,
			}, // Deadlift
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54811"),
				reps: 12,
			}, // Squat
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54813"),
				reps: 12,
			}, // Lunges
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54819"),
				reps: 12,
			}, // Leg Press
			{
				exercise: new mongoose.Types.ObjectId("665497d559bcfc3b02c5481b"),
				reps: 12,
			}, // Calf Raises
		],
		default: true,
	},
	{
		name: "Chest and Triceps Focus",
		exercises: [
			{
				exercise: new mongoose.Types.ObjectId("665497d259bcfc3b02c54803"),
				reps: 12,
			}, // Push Up
			{
				exercise: new mongoose.Types.ObjectId("665497d359bcfc3b02c54806"),
				reps: 12,
			}, // Bench Press
			{
				exercise: new mongoose.Types.ObjectId("665497d359bcfc3b02c5480b"),
				reps: 12,
			}, // Shoulder Press
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54815"),
				reps: 12,
			}, // Tricep Dips
			{
				exercise: new mongoose.Types.ObjectId("665497d559bcfc3b02c5481d"),
				reps: 12,
			}, // Chest Fly
		],
		default: true,
	},
	{
		name: "Back and Biceps Focus",
		exercises: [
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c5480d"),
				reps: 12,
			}, // Pull Up
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c5480f"),
				reps: 12,
			}, // Deadlift
			{
				exercise: new mongoose.Types.ObjectId("665497d459bcfc3b02c54817"),
				reps: 12,
			}, // Lat Pulldown
			{
				exercise: new mongoose.Types.ObjectId("665497d559bcfc3b02c5481f"),
				reps: 12,
			}, // Rowing
		],
		default: true,
	},
];

module.exports = defaultWorkouts;

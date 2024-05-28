const mongoose = require('mongoose');
const { Schema } = mongoose;


const workoutSchema = new Schema({
  name: String,
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  tags: [String]
});

const WorkoutModel = mongoose.model('Workout', workoutSchema);

module.exports = WorkoutModel;

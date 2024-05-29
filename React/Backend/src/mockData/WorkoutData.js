const { ObjectId } = require('mongoose').Types;

const defaultWorkouts = [
  {
    name: 'Full Body Workout',
    exercises: [
      new ObjectId('665497d259bcfc3b02c54803'), // Push Up
      new ObjectId('665497d459bcfc3b02c5480f'), // Deadlift
      new ObjectId('665497d459bcfc3b02c54811'), // Squat
      new ObjectId('665497d459bcfc3b02c5480d'), // Pull Up
      new ObjectId('665497d359bcfc3b02c5480b'), // Bicep Curl
      new ObjectId('665497d459bcfc3b02c54815')  // Tricep Dips
    ],
    tags: [
      'Chest', 'Shoulders', 'Triceps', 'Back', 'Legs', 'Glutes', 'Biceps'
    ]
  },
  {
    name: 'Upper Body Workout',
    exercises: [
      new ObjectId('665497d259bcfc3b02c54803'), // Push Up
      new ObjectId('665497d359bcfc3b02c54806'), // Bench Press
      new ObjectId('665497d359bcfc3b02c54809'), // Shoulder Press
      new ObjectId('665497d459bcfc3b02c5480d'), // Pull Up
      new ObjectId('665497d459bcfc3b02c54815'), // Tricep Dips
      new ObjectId('665497d459bcfc3b02c54817')  // Lat Pulldown
    ],
    tags: [
      'Chest', 'Shoulders', 'Triceps', 'Back', 'Biceps'
    ]
  },
  {
    name: 'Lower Body Workout',
    exercises: [
      new ObjectId('665497d459bcfc3b02c5480f'), // Deadlift
      new ObjectId('665497d459bcfc3b02c54811'), // Squat
      new ObjectId('665497d459bcfc3b02c54813'), // Lunges
      new ObjectId('665497d459bcfc3b02c54819'), // Leg Press
      new ObjectId('665497d559bcfc3b02c5481b')  // Calf Raises
    ],
    tags: [
      'Legs', 'Glutes', 'Calves'
    ]
  },
  {
    name: 'Chest and Triceps Focus',
    exercises: [
      new ObjectId('665497d259bcfc3b02c54803'), // Push Up
      new ObjectId('665497d359bcfc3b02c54806'), // Bench Press
      new ObjectId('665497d359bcfc3b02c5480b'), // Shoulder Press
      new ObjectId('665497d459bcfc3b02c54815'), // Tricep Dips
      new ObjectId('665497d559bcfc3b02c5481d'), // Chest Fly
      new ObjectId('665497d559bcfc3b02c54821')  // Incline Bench Press
    ],
    tags: [
      'Chest', 'Shoulders', 'Triceps'
    ]
  },
  {
    name: 'Back and Biceps Focus',
    exercises: [
      new ObjectId('665497d459bcfc3b02c5480d'), // Pull Up
      new ObjectId('665497d459bcfc3b02c5480f'), // Deadlift
      new ObjectId('665497d459bcfc3b02c54817'), // Lat Pulldown
      new ObjectId('665497d559bcfc3b02c5481f'), // Rowing
      new ObjectId('665497d359bcfc3b02c5480b')  // Bicep Curl
    ],
    tags: [
      'Back', 'Biceps', 'Legs', 'Glutes'
    ]
  }
];

module.exports = defaultWorkouts;

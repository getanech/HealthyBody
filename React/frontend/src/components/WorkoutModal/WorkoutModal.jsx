import React from 'react'
import "./Workout.css";

export default function WorkoutModal({workout}) {

  const showExerciseInfo = () => {
    return (
      <div className='exerciseInfoContainer'>
        {
          workout.exercises.map((exercise, index) => {
            return <p key={index}>{exercise.name}</p>
          })
        }
      </div>
    )
  }

  return (
    <div className="WorkoutModal">
			<div className="Workout">
        <h1 className='h1'>{workout.name}</h1>
        {showExerciseInfo()}
			</div>
		</div>
    
  );
}

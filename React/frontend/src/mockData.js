const mockData = {
	users: [
		{
			id: 1,
			firstName: "john",
			lastName: "doe",
			email: "johnDoe@gmail.com",
			password: "12345",
			workouts: [
				{
					id: 1,
					date: "6.5.2024",
					duration: 90,
					muscles: [
						{
							muscle: "Chest",
							exercises: [
								{
									name: "Bench Press",
									reps: 10,
									weight: 50,
								},
								{
									name: "Flys",
									reps: 15,
									weight: 15,
								},
							],
						},
						{
							muscle: "Triceps",
							exercises: [
								{
									name: "Dips",
									reps: 10,
								},
								{
									name: "Extensions",
									reps: 15,
									weight: 15,
								},
							],
						},
						{
							muscle: "Chest",
							exercises: [
								{
									name: "Bench Press",
									reps: 10,
									weight: 50,
								},
								{
									name: "Flys",
									reps: 15,
									weight: 15,
								},
							],
						},
						{
							muscle: "Triceps",
							exercises: [
								{
									name: "Dips",
									reps: 10,
								},
								{
									name: "Extensions",
									reps: 15,
									weight: 15,
								},
							],
						},
					],
				},
			],
		},
	],
};
export default mockData;

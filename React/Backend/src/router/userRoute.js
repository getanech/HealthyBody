const express = require("express");
const usersData = require("../mockData/UserData");
const UsersMiddleware = require("../middleware/UsersMiddleware");
const userRoute = express.Router();

userRoute.post("/", UsersMiddleware.register);
userRoute.post("/login", UsersMiddleware.login);
userRoute.post("/", (req, res) => {
	return res.status(200).json({ response: "123456" });
});
userRoute.post("/workouts", UsersMiddleware.addUserWorkout);

module.exports = userRoute;

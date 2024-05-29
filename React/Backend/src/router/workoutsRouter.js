const express = require("express");

const WorkoutsMiddleware = require("../middleware/WorkoutsMiddleware");
const workoutRouter = express.Router();

workoutRouter.get("/", WorkoutsMiddleware.getAllWorkouts);

module.exports = workoutRouter;

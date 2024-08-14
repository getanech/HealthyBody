const express = require("express");
const exerciseController = require("../controllers/exerciseController");

const exerciseRouter = express.Router();

exerciseRouter.get("/", exerciseController.getAllExercises);

// exerciseRouter.get("/:id", exerciseController.getSingleExercise);

exerciseRouter.post("/", exerciseController.createExercise);

exerciseRouter.patch("/:id", exerciseController.updateExercise);

exerciseRouter.delete("/:id", exerciseController.deleteExercise);

module.exports = exerciseRouter;

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { connectToServer } = require("./databse/dbConnection");
require("dotenv").config();

app.use(bodyParser.json());

const port = process.env.PORT || 6666;

connectToServer();

const cors = require("cors");
const userRoute = require("./router/userRoute");
const workoutRouter = require("./router/workoutsRouter");

app.use(cors());
app.use("/users", userRoute);
app.use("/workouts", workoutRouter);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () =>
	console.log(`[SERVER]\t\tServer is running on port: ${port}!`)
);

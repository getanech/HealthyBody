const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const { connectToServer } = require("./databse/dbConnection");
const dotenv = require("dotenv");

app.use(bodyparser.json());

dotenv.config();

const port = process.env.PORT || 6666;

connectToServer();

const cors = require("cors");
const userRoute = require("./router/userRoute");

app.use(cors());
app.use("/users", userRoute);

app.listen(port, () =>
	console.log(`[SERVER]\t\tServer is running on port: ${port}!`)
);

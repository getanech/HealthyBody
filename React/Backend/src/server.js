const express = require("express");
const app = express();
const userRoute = require("./controlls/router/userRoute");
const bodyparser = require('body-parser');

app.use(bodyparser.json());


const port = 5000;

const cors = require("cors");
app.use(cors());
app.use("/", userRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



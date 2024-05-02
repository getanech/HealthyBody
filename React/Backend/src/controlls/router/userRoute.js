const express = require("express");
const usersData = require("../../mockData/UserData")
const userRoute = express.Router();


userRoute.post("/", (req, res) => {
	
	const email = req.body.email
	const password = req.body.password
	console.log(req.body)
	console.log(usersData)
	for(let i = 0 ; i < usersData.length ;i++){
		console.log(usersData[i])
		if(usersData[i].email === email){
			console.log("FOUND BY EMAIL:", email)
			console.log("PASWORD IS: ", usersData[i].password)
			if(usersData[i].password === password){
				console.log("PASSWORD CORRECT")
				return res.status(200).json({message: "LOG IN SUCCESSFULL"})
			}
			else{
				console.log("PASSWORD INCORRECT")
			}
		}
	}

	res.status(401).json({
		message: "Wrong email or password"
	});
});

module.exports = userRoute;

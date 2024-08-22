import { useNavigate } from "react-router-dom";
import "./register.css";
import { useState, useRef } from "react";
import userRequests from "../../api/userRequests";

export default function Register() {
	const subscriptionEndDate = new Date(
		new Date().getTime() + 6 * 30 * 24 * 60 * 60 * 1000
	).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
		day: "numeric",
	});

	const useNavigate1 = useNavigate();
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const ageRef = useRef(null);
	const weightRef = useRef(null);
	const heightRef = useRef(null);
	const phoneRef = useRef(null);
	const sexRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const creditCardNumber = useRef(null);
	const creditCardExp = useRef(null);
	const creditCardCVV = useRef(null);
	const creditCardName = useRef(null);

	const [sex, setSex] = useState("");

	const validateFields = () => {
		if (
			firstNameRef.current.value === "" ||
			lastNameRef.current.value === "" ||
			ageRef.current.value === "" ||
			weightRef.current.value === "" ||
			heightRef.current.value === "" ||
			phoneRef.current.value === "" ||
			sexRef.current.value === "" ||
			emailRef.current.value === "" ||
			passwordRef.current.value === "" ||
			creditCardNumber.current.value === "" ||
			creditCardExp.current.value === "" ||
			creditCardCVV.current.value === "" ||
			creditCardName.current.value === ""
		) {
			alert("Please fill all fields");
			return false;
		}
	};

	const handleRegister = async () => {
		const data = {
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			age: ageRef.current.value,
			weight: [weightRef.current.value],
			height: heightRef.current.value,
			phone: phoneRef.current.value,
			sex: sexRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			subscriptionEnd: subscriptionEndDate,
		};
		const response = await userRequests.register(data);
		if (response.status === 200) {
			alert("Register successfully!");
			useNavigate1("/");
		} else {
			alert("Register failed.");
		}
	};

	return (
		<div className="registerMainContainer">
			<div className="registerPanel">
				<h3>Register</h3>

				<div className="registerForm form">
					<label>First Name:</label>
					<input ref={firstNameRef} />

					<label>Last Name:</label>
					<input ref={lastNameRef} />

					<label>Age:</label>
					<input ref={ageRef} />

					<label>Weight:</label>
					<input ref={weightRef} />

					<label>Height:</label>
					<input ref={heightRef} />

					<label>Phone:</label>
					<input ref={phoneRef} />

					<label>Sex:</label>
					<div>
						<label>Male</label>
						<input
							value="male"
							type="Radio"
							name="sex"
							onChange={(e) => setSex(e.target.value)}
							ref={sexRef}
						/>
						<label>Female</label>
						<input
							value="female"
							type="Radio"
							name="sex"
							onChange={(e) => setSex(e.target.value)}
							ref={sexRef}
						/>
					</div>

					<label>Email:</label>
					<input ref={emailRef} />

					<label>Password:</label>
					<input ref={passwordRef} />
				</div>
				<h3>Payment</h3>
				<div className="registerForm form">
					<label>Credit Card Number:</label>
					<input type="number" ref={creditCardNumber} />
					<label>Expiration Date:</label>
					<input type="date" ref={creditCardExp} />
					<label>CVV:</label>
					<input type="number" ref={creditCardCVV} />
					<label>Cardholder's Name:</label>
					<input type="text" ref={creditCardName} />
				</div>
				<h3>
					Your subscription will be valid from{" "}
					{new Date().toLocaleDateString("en-US", {
						month: "long",
						year: "numeric",
						day: "numeric",
					})}
					{" until "}
					{subscriptionEndDate}
				</h3>
				<button onClick={handleRegister}>Submit</button>
				<button onClick={() => useNavigate1("/")}>Back</button>
			</div>
		</div>
	);
}

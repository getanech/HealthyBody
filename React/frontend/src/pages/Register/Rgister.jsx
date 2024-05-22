import { useNavigate } from "react-router-dom";
import "./register.css";
import { useState, useRef } from "react";
import userRequests from "../../api/userRequests";

export default function Register() {
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

	const [sex, setSex] = useState("");

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
		};
		const response = await userRequests.register(data);
		if (response.status === 200) {
			alert("Register successfully!");
			useNavigate1("/login");
		} else {
			alert("Register failed.");
		}

		// useNavigate1("/login");
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
				<button onClick={handleRegister}>Submit</button>
				<button onClick={() => useNavigate1("/login")}>Back</button>
			</div>
		</div>
	);
}

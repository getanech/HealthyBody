import { useNavigate } from "react-router-dom";
import "./login.css";
import { useRef } from "react";
import userRequests from "../../api/userRequests";
import Modal from "../../components/Modal/Modal";

export default function Login() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const navigate = useNavigate();

	const pageStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100svh",
		width: "100svw",
	};

	const handleLogin = async () => {
		const data = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		const response = await userRequests.login(data);
		console.log("response", response);
		if (response.status === 200) {
			navigate("/home");
		} else {
			alert("Login failed");
		}
	};

	return (
		<div style={pageStyle}>
			<Modal />
			<div className="loginContainer">
				<div className="loginPanel">
					<h1>Login</h1>
					<div className="loginForm">
						<label htmlFor="">Email:</label>
						<input ref={emailRef} />
						<label htmlFor="">Password:</label>
						<input ref={passwordRef} />
					</div>
					<button onClick={handleLogin}>Submit</button>
					<button
						onClick={() => {
							navigate("/register");
						}}
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
}

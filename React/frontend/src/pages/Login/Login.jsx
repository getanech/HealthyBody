import { useNavigate } from "react-router-dom";
import "./login.css";
import { useContext, useEffect, useRef, useState } from "react";
import userRequests from "../../api/userRequests";
import Modal from "../../components/Modal/Modal";
import UserContext from "../../context/UserContext";

export default function Login() {
	const { user, updateUser } = useContext(UserContext);
	const [popContent, setPopContent] = useState(<></>);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/home");
		}
	}, [user]);

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

		if (!response || response.status != 200) {
			showModal("Login failed");
			return;
		}

		updateUser(response.data.data);
		navigate("/home");
	};

	const showModal = (message) => {
		setPopContent(<Modal message={message} close={closeModal} />);
	};

	const closeModal = () => {
		setPopContent(<></>);
	};

	return (
		<div style={pageStyle}>
			{popContent}
			<div className="loginContainer">
				<div className="loginPanel">
					<h1>Healthy Body</h1>
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

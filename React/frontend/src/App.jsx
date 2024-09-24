import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { UserProvider } from "./context/UserContext";
import Main from "./pages/MainManu";
import Workout from "./pages/Workout/Workout";
import Profile from "./pages/Profile";

function App() {
	return (
		<UserProvider>
			<div className="mainAppContainer">
				{/* <Header /> */}
				<div className="bodyContainer">
					<Routes>
						<Route path="/home" element={<Main />} />
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/workouts" element={<Workout />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</UserProvider>
	);
}
export default App;

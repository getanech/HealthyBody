import React, { useContext, useEffect, useRef, useState } from "react";
import "./profile.css";

import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import RenewSubscription from "./RenewSubscription";
import Statistics from "./Statistics";

export default function Profile() {
	const [content, setContent] = useState(<></>);

	const showRenewSubscription = () => {
		setContent(<RenewSubscription back={() => setContent(<ProfileInfo />)} />);
	};

	const goToProfileInfo = () => {
		setContent(<ProfileInfo goToRenewSubscription={showRenewSubscription} />);
	};

	const goToStatistics = () => {
		setContent(<Statistics />);
	};

	useEffect(() => {
		goToProfileInfo();
	}, []);

	return (
		<div className="menuContainer">
			<div className="contentWrapper">
				<div className="tabPanel">
					<button onClick={() => window.history.back()}>Back</button>
					<button onClick={goToProfileInfo}>Info</button>
					<button onClick={() => setContent(<ChangePassword />)}>
						Change Password
					</button>
					<button onClick={goToStatistics}>Statistics</button>
				</div>
				{content}
			</div>
		</div>
	);
}

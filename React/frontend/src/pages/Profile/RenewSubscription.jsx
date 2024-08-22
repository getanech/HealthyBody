import React, { useContext, useRef } from "react";
import UserContext from "../../context/UserContext";
import userRequests from "../../api/userRequests";

export default function ({ back }) {
	const { user, updateUser } = useContext(UserContext);
	const creditCardNumber = useRef(null);
	const creditCardName = useRef(null);
	const creditCardExp = useRef(null);
	const creditCardCVV = useRef(null);
	const subscriptionEndDate = new Date(
		Date.now() + 1000 * 60 * 60 * 24 * 30 * 6
	);

	const renewSubscription = async () => {
		user.subscriptionEnd = subscriptionEndDate;
		const response = await userRequests.updateUser(user);

		if (response.status === 200) {
			updateUser(response.data.data);
			back();
		}

		return response;
	};

	return (
		<div className="renewSubscriptionForm">
			<label>New subscription end date:</label>
			<p>
				{subscriptionEndDate.toLocaleDateString("en-US", {
					month: "long",
					year: "numeric",
					day: "numeric",
				})}
			</p>
			<form>
				<label>Credit Card Number:</label>
				<input type="text" ref={creditCardNumber} />
				<label>Name on Card:</label>
				<input type="text" ref={creditCardName} />
				<label>Expiration Date:</label>
				<input type="text" ref={creditCardExp} />
				<label>CVV:</label>
				<input type="text" ref={creditCardCVV} />
			</form>
			<button onClick={renewSubscription} type="submit">
				Submit
			</button>
		</div>
	);
}

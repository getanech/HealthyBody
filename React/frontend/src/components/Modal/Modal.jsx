import React from "react";
import "./Modal.css";
export default function Modal({ message, close }) {
	return (
		<div className="modalWrapper">
			<div className="modal">
				<h2>{message}</h2>
				<button onClick={close}>Close</button>
			</div>
		</div>
	);
}

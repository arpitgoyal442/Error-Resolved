import React from "react";

const Modal = (props) => {
	const closeModal = (e) => {
		if (e.target.id === "modal") props.setShowModal(false);
	};
	return props.showModal ? (
		<div onClick={closeModal} id="modal">
			<div>{props.children}</div>
		</div>
	) : null;
};

export default Modal;

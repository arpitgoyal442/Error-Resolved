import Link from "next/link";
import Modal from "react-modal";
import { useState } from "react";
import NotificationModal from "./NotificationModal";

Modal.setAppElement("#root");

function DropdownContent({ closeDropdown }) {
	const [modal, setModal] = useState(false);
	const onModal = () => {
		closeDropdown();
		setModal(true);
	};
	const offModal = () => {
		setModal(false);
	};
	return (
		<div>
			<p id="notificationTile" onClick={onModal}>
				<b>Dhruv Pasricha</b> Is requesting to solve Java Doubt
			</p>
			<hr />
			<Modal
				isOpen={modal}
				onRequestClose={offModal}
				shouldCloseOnOverlayClick={true}
				style={{
					overlay: {
						backgroundColor: "rgba(105,105,105,0.3)",
						zIndex: "2",
					},
					content: {
						padding: "0",
						marginLeft: "27vw",
						marginTop: "10vh",
						marginBottom: "10vh",
						border: "1px solid black",
						background: "#fff",
						WebkitOverflowScrolling: "touch",
						borderRadius: "4px",
						//  overflowY:"auto",
						scrollbarWidth: "0",
						width: "50%",
					},
				}}
			>
				<NotificationModal offModal={offModal} />
			</Modal>

			{/*  */}
		</div>
	);
}

export default DropdownContent;

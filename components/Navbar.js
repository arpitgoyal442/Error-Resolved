import React, { useState } from "react";
import BellIcon from "@heroicons/react/solid/BellIcon";
import DropdownContent from "./student/DropdownContent";

function Navbar() {
	const [showNotification, setNotification] = useState(false);

	return (
		<div className="navbar">
			<h2>
				<span>
					<del>ERROR:</del>&nbsp;
				</span>
				RESOLVED
			</h2>
			<div className="navbarIcons">
				<div
					onClick={() => {
						showNotification ? setNotification(false) : setNotification(true);
					}}
					className="dropdown"
				>
					<BellIcon width={30} height={30} />
					<div
						className="dropdown-content"
						style={{ display: showNotification ? "block" : "none" }}
					>
						<ul>
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
							<DropdownContent />
						</ul>
					</div>
				</div>
				<div className="navbar_profile">
					<img src="/profile_img.jpeg" alt="profile" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;

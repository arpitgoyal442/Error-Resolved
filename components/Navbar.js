
import React, { useState } from "react";
import Modal from "react-modal";
import { hide } from "react-modal/lib/helpers/ariaAppHider";


function Navbar() {


	return (
		<>
			<div className="navbar">




				<h2>
					{" "}
					<span>
						<del>ERROR:</del>{" "}
					</span>
					RESOLVED
				</h2>

				<div className="navbarIcons">
					{/* <div className="bell-dropdown">

						<span

							className="iconify-inline"


							data-icon="clarity:notification-solid"
							data-width="30"
							data-height="30"
							style={{ color: "gold" }}
						></span>

						


					</div> */}

<div class="dropdown">
 
  <span class="iconify-inline" data-icon="clarity:notification-solid" style={{color: "gold"}} data-width="30" data-height="30"></span>
  <div class="dropdown-content">
  <ul>
	  <li>abc</li>
	  <li>arpit</li>
	  <li>abc</li>
	  <li>arpit</li>
	  <li>abc</li>
	  <li>arpit</li>
  </ul>
  </div>
</div>






					<img src="/profile_img.jpeg" alt="njn" />
				</div>

				


			</div>

			


		</>
	);
}

export default Navbar;

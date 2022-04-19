
import React, { useState } from "react";
import Modal from "react-modal";
import { hide } from "react-modal/lib/helpers/ariaAppHider";
import DropdownContent from "./student/DropdownContent";


function Navbar() {

	const[showNotification,setNotification]=useState(false);


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
					

<div onClick={()=>{ showNotification? setNotification(false):setNotification(true     )}} class="dropdown">
 
  <span  class="iconify-inline" data-icon="clarity:notification-solid" style={{color: "gold"}} data-width="30" data-height="30"></span>
  <div class="dropdown-content" style={ {display: showNotification?"block":"none" } }>
  <ul>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  <DropdownContent/>
	  
	  
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

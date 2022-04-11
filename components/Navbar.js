
import React , {useState} from "react"

function Navbar() {

	const [dropdown,setDropdown]=useState(false);

	function bellClicked(){

		// e.preventDefault();
		console.log("Clicked");
	}

	


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
					<div className="bell-dropdown">

					<span
					    
						className="iconify-inline"
						
						onClick={bellClicked()}
						data-icon="clarity:notification-solid"
						data-width="30"
						data-height="30"
						style={{ color: "gold" }}
					></span>

					  
					  { dropdown? <div  className="bell-dropdown-content">

<ul>
	<li>abc</li>
	<li>djfnj</li>
	<li>jdnfj</li>
	<li>wjdnfj</li>

</ul>

</div>: '' }

					

					</div>
					<img src="/profile_img.jpeg" alt="njn" />
				</div>
			</div>
		</>
	);
}

export default Navbar;

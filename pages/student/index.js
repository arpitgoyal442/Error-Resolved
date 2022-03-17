import Navbar from "../../components/Navbar";
import StudentLeftbar from "../../components/StudentLeftbar";
// import DoubtCard from "../../components/DoubtCard";
import { useState } from "react";

import StudentDoubtCard from "../../components/StudentDoubtCard";

function StudentHome() {
	
	const [sort, setSort] = useState(1);
		
	return (
		<div className="debuggerHome">
			<Navbar />
			<hr />
			<div className="debuggerHome_body">
				<StudentLeftbar
					sort={sort}
					setSort={setSort}
					
				/>
				 <div className="debuggerHome_doubtsContainer">
					<StudentDoubtCard />
					<StudentDoubtCard />
					<StudentDoubtCard />
					
				</div> 
			</div>
		</div>
	);
}

export default StudentHome;

import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import StudentDoubtCard from "../../components/StudentDoubtCard";
import StudentFilters from "../../components/StudentFilters";

function StudentHome() {
	const [status, setStatus] = useState(1);

	return (
		<>
			<Navbar />
			<div className="debuggerHome">
				<>
					<StudentFilters status={status} setStatus={setStatus} />
					<div className="student__newDoubt">
						<Link href="/student/new-doubt">New Doubt</Link>
					</div>
					<div className="debuggerHome_doubtsContainer">
						<StudentDoubtCard />
						<StudentDoubtCard />
						<StudentDoubtCard />
					</div>
				</>
			</div>
		</>
	);
}

export default StudentHome;

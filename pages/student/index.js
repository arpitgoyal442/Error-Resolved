import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import DoubtCard from "../../components/student/DoubtCard";
import Filters from "../../components/student/Filters";

function StudentHome() {
	const [status, setStatus] = useState(1);

	return (
		<>
			<Navbar />
			<div className="debuggerHome">
				<>
					<Filters status={status} setStatus={setStatus} />
					<div className="student__newDoubt">
						<Link href="/student/new-doubt">New Doubt</Link>
					</div>
					<div className="debuggerHome_doubtsContainer">
						<DoubtCard />
						<DoubtCard />
						<DoubtCard />
					</div>
				</>
			</div>
		</>
	);
}

export default StudentHome;

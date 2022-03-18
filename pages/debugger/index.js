import Navbar from "../../components/Navbar";
import Leftbar from "../../components/Leftbar";
import DoubtCard from "../../components/DoubtCard";
import { useState } from "react";

function DebuggerHome() {
	/*
		sort: 1->time, 2->price
		active: -1->false, 0->all, 1->true
		requested: -1->false, 0->all, 1->true
		topic: array of strings
	*/
	const [sort, setSort] = useState(1),
		[active, setActive] = useState(0),
		[requested, setRequested] = useState(0),
		[topic, setTopic] = useState([]);
	return (
		<div className="debuggerHome">
			<Navbar />
			<div className="debuggerHome_body">
				<Leftbar
					sort={sort}
					setSort={setSort}
					active={active}
					setActive={setActive}
					requested={requested}
					setRequested={setRequested}
					topic={topic}
					setTopic={setTopic}
				/>
				<div className="debuggerHome_doubtsContainer">
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
					<DoubtCard />
				</div>
			</div>
		</div>
	);
}

export default DebuggerHome;

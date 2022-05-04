import { useState } from "react";
import Link from "next/link"
function StudentDoubtCard() {

	const [showoptions,setoptions]=useState(false);



	return (
		<div className="studentDoubtCard">

			<div onClick={ ()=>{  showoptions?setoptions(false):setoptions(true) } }>
			<span  className="iconify-inline studentDoubtCard_options" data-icon="bx:dots-vertical-rounded" data-width="25" data-height="25"></span>
			</div>
			
			<h4 className="studentDoubtCard_topic">Java</h4>
			{/*  */}

			<div
						className="studentDoubtCard_dropdown"
						style={{ display: showoptions ? "block" : "none" }}
					>
						<ul>
							<Link href="/student/doubt/123">
								<div>
						<span className="iconify-inline" data-icon="bx:window-open" data-width="25" data-height="25"></span>
						</div>
						</Link>

						<Link href="/student/edit/123">
						<div>
						<span className="iconify-inline" data-icon="ci:edit" data-width="25" data-height="25"></span>
						</div>
						</Link>
						<div>
						<span className="iconify-inline" data-icon="fluent:delete-24-filled" data-width="25" data-height="25"></span>
						</div>
						</ul>
					</div>


			{/*  */}
			
			<p className="studentDoubtCard_text">
				Having Trouble in question &quot;geek collects the balls&quot; from GFG . I think my approach
				is correct but not getting correct output.Want help to know whats wrong in my approach.
			</p>
			<br />
			<p className="studentDoubtCard_date">{new Date().toLocaleString("in")}</p>

			




		</div>
	);
}

export default StudentDoubtCard;

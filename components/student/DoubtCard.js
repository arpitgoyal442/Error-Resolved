import Link from "next/link";

function StudentDoubtCard() {

	return (
		<div className="studentDoubtCard">
			<h4 className="studentDoubtCard_topic">Java</h4>
			<ul className="studentDoubtCard_dropdown">
				<Link href="/student/doubt/123">
					<span
						className="iconify-inline"
						data-icon="akar-icons:eye"
						data-width="25"
						data-height="25"
					></span>
				</Link>
				<Link href="/student/edit/123">
					<span
						className="iconify-inline"
						data-icon="ci:edit"
						data-width="25"
						data-height="25"
					></span>
				</Link>
				<span
					className="iconify-inline"
					data-icon="fluent:delete-24-filled"
					data-width="25"
					data-height="25"
				></span>
			</ul>
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

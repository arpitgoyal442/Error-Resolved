function StudentDoubtCard() {
	return (
		<div className="studentDoubtCard">
			<p className="studentDoubtCard_date">{new Date().toLocaleString("in")}</p>
			<h4 className="studentDoubtCard_topic">Java</h4>
			<p className="studentDoubtCard_text">
				Having Trouble in question &quot;geek collects the balls&quot; from GFG . I think my approach
				is correct but not getting correct output.Want help to know whats wrong in my approach.
			</p>
		</div>
	);
}

export default StudentDoubtCard;

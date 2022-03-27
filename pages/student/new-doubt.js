import Navbar from "../../components/Navbar";

const topics = [
	"Java",
	"C++",
	"Python",
	"C",
	"Node.js",
	"Java",
	"C++",
	"Python",
	"C",
	"Node.js",
	"Java",
	"C++",
	"Python",
	"C",
	"Node.js",
	"Django",
	"Kubernetes",
	"Java",
	"C++",
	"Python",
	"C",
	"Node.js",
];

function add() {
	return (
		<div className="addDoubt">
			<Navbar />

			<div className="addDoubt_body">
				<h1 className="addDoubt_mainHead">Add Doubt</h1>

				<div className="addDoubt_form">
					<div className="addDoubt_language">
						<label htmlFor="" className="addDoubt_heading">
							Language
						</label>
						<div className="list">
							{topics.map((t, i) => (
								<p key={i}>{t}</p>
							))}
						</div>
					</div>
					<div className="addDoubt_difficulty">
						<label htmlFor="" className="addDoubt_heading">
							Difficulty
						</label>
						<div className="list">
							<p>Easy</p>
							<p>Medium</p>
							<p>Hard</p>
						</div>
					</div>

					<div>
						<label htmlFor="" className="addDoubt_heading">Screenshot</label>
						<input type="file" />
					</div>

					<div>
						<label htmlFor="" className="addDoubt_heading">Short Description</label>
						<textarea name="" id="" cols="30" rows="2"></textarea>
					</div>

					<div>
						<label htmlFor="" className="addDoubt_heading">Long Description</label>
						<textarea name="" id="" cols="30" rows="3"></textarea>
					</div>

					<div className="addDoubt_btnParent"><button className="addDoubt_btn">Add</button></div>
				</div>
			</div>
		</div>
	);
}

export default add;

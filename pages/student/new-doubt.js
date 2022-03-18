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

			<h1>Add Doubt</h1>
			

				<div className="addDoubt_body_form">


					
					

					<div className="addDoubt_body_form_language">
						<label htmlFor="">Language</label>
						<div className="addDoubt_languages">
						{topics.map( (t)=>( <p>{t}</p> ) )}
						</div>
						
					</div>
					<div className="addDoubt_body_form_difficulty">
						<label htmlFor="">Difficulty</label>
						<div className="addDoubt_difficulty">
							<p>Easy</p>
							<p>Medium</p>
							<p>Hard</p>
						</div>
					</div>


                    <div>
					<label htmlFor="">Screenshot</label>
					<input type="file" />
					</div>


                    <div>
					<label htmlFor="">Short Description</label>
					<textarea name="" id="" cols="30" rows="2"></textarea>
					</div>

                    <div>
					<label htmlFor="">Long Description</label>
					<textarea name="" id="" cols="30" rows="3"></textarea>
					</div>

					<button>Add</button>

				</div>

			</div>
			
		</div>
	);
}

export default add;

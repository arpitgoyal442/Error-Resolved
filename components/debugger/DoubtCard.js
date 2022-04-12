// import React from 'react'
// import { Link } from 'react-router-dom'
import Link from "next/link";
import Modal from 'react-modal';
import React , {useState} from 'react';
import DoubtModal from "./DoubtModal.js"
Modal.setAppElement("#root");

function DoubtCard() {

	const[modal,setModal]=useState(false);

	const OnModal=()=>{

		setModal(true);

	}

	const offModal=()=>{
		setModal(false);
	}


	return (
		<div className="doubtCard">
			<div className="doubtCard_navbar">
				<p>Active</p>
				<h2>Java</h2>
				<p>Medium</p>
				{/* <p className="doubtCard_amount">₹40</p> */}
			</div>

			<div className="doubtCard_body">
				<div>
					<h5 className="heading">Amount</h5>
					<p>₹40</p>
				</div>
				<div>
					<h5 className="heading">Description</h5>
					<p className="doubtCard_text">
						Having Trouble in question &quot;geek collects the balls&quot; from GFG . I think my
						approach is correct but not getting correct output.Want help to know whats wrong in my
						approach.
					</p>
				</div>
			</div>
			<div className="doubtCard_footer">
				<button onClick={ OnModal } className="doubtCard_view">View</button>
				<button className="doubtCard_request">Request</button>
				
			</div>

			<Modal isOpen={modal} onRequestClose={ ()=>{setModal(false)} } 

			style={
				{
					overlay:{


						backgroundColor:'rgba(105,105,105,0.3)',
						zIndex:'2',
						// backgroundColor:'gray'

						
						
					},
					content:{

						

						padding:"0",
						marginLeft:"27vw",
						marginTop:"10vh",
						marginBottom:"10vh",
                         
                         border: '1px solid black',
                         background: '#fff',
                        
                         WebkitOverflowScrolling: 'touch',
                         borderRadius: '4px',
						overflowY:"auto",
                        
						 height:"80%",
						width:"50%"
                         
						 


						


					}
				}
			}
			 >

				 <DoubtModal offModal={offModal} />



				

				

            

				
			</Modal>



		</div>

	);
}

export default DoubtCard;

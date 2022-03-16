import Link from "next/link";

function StudentLeftbar({ sort, setSort}) {
  
	return (
		<div className="studentLeftbar">
			
			
                <div className="studentLeftbar_main">
                        <Link href="/student/add">
                <a><span className="iconify" id="studentLeftbar_add" data-icon="carbon:add-filled" data-width="50" data-height="50"></span></a></Link>

                
                <button>Ongoing</button>
                <button>Resolved</button>
                <button>Pending</button>
                </div>
			
			
		</div>
	);
}

export default StudentLeftbar;

// import React from 'react'
// import { Link } from 'react-router-dom'
import Link from "next/link"


function DoubtCard() {
  return (
    <div className='doubtCard'>

        <div className="doubtCard_navbar">
            <p>Active</p>
            <h3>Java</h3>
            <p>Medium</p>
        </div>
        <div className="doubtCard_body">
            <p>Having Trouble in question "geek collects the balls" from GFG . I think my approach is correct but not getting correct output.Want help to know whats wrong in  my approach.</p>
        </div>
        <div className="doubtCard_footer">
          {/* <button id='doubtCard_solve'>Solve</button>
          <button id='doubtCard_view'>View</button> */}
          <Link href ="/opendoubt"><span id='doubtCard_solve' className="iconify-inline " data-icon="akar-icons:arrow-forward-thick-fill" data-width="24" data-height="24"></span></Link>

          <span className="iconify-inline doubtCard_view"  data-icon="bi:eye-fill" data-width="25"></span>
          40/-

        </div>

    </div>
  )
}

export default DoubtCard
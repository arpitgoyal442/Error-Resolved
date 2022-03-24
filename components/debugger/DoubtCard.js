// import React from 'react'
// import { Link } from 'react-router-dom'
import Link from "next/link"


function DoubtCard() {
  return (
    <div className='doubtCard'>

        <div className="doubtCard_navbar">
            <p>Active</p>
            <h2>Java</h2>
            <p>Medium</p>
        </div>
        
        <div className="doubtCard_body">
            <p>Having Trouble in question &quot;geek collects the balls&quot; from GFG . I think my approach is correct but not getting correct output.Want help to know whats wrong in  my approach.</p>
        </div>
        <div className="doubtCard_footer">
          
           <button className="doubtCard_request">Request</button>
          <span className="iconify-inline doubtCard_view"  data-icon="bi:eye-fill" data-width=""></span>
          40/-

        </div>

    </div>
  )
}

export default DoubtCard
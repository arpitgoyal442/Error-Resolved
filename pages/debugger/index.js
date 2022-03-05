// import React from 'react'
import Navbar from '../../components/Navbar'



import Leftbar from '../../components/Leftbar'
// import RightChatBar from './RightChatBar'
import DoubtCard from "../../components/DoubtCard"


function DebuggerHome() {
  return (

    <div className="debuggerHome">



      <Navbar />
      <hr />


      <div className="debuggerHome_body">
        <Leftbar />


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

      {/* <RightChatBar/> */}









    </div>
  )
}

export default DebuggerHome
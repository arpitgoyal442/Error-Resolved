
import Navbar from "../../../components/Navbar";


function notificationHandle(){

    return(

      <div className="notificationHandle">

          <Navbar/>

          <div className="notificationHandle_header">

              <img src="/userimg.jpg" alt="" />
              <div className="notificationHandle_header_right">

                  <h1>Dhruv Pasricha</h1>
                  <p>(4 starts)</p>
                  <p>Speciality: Java , c++ , Competitive programming</p>
                  <p>Total doubts solved: 56</p>

              </div>

             

          </div>
          <hr />

          <div className="notificationHandle_body">
              <h2>Doubt Description:</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>



          <div className="notificationHandle_footer">

              <button>Accept</button>
              <button>Decline</button>
          </div>




      </div>
    )

}

export default notificationHandle;
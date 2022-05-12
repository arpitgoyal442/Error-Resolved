
import Navbar from "../../../components/Navbar";
import DoubtsChart from "../../../components/profile/DoubtsChart";
import TopicsChart from "../../../components/profile/TopicsChart";


function notificationHandle(){

    return(

     <div className="notificationHandle">
         
         <Navbar></Navbar>

             <div className="notificationHandle_head">

                 <div className="notificationHandle_head_card">
                      
                      <img src="/profile_img.jpeg" alt="" />
                     <div className="notificationHandle_head_card_right">

                         <h2>Arpit Goyal</h2>


                     </div>
                     

                 </div>

             </div>

             <div className="notificationHandle_body">r</div>

             <div className="notificationHandle_footer">r</div>



         

     </div>
    )

}

export default notificationHandle;
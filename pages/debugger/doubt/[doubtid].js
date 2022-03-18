
import Navbar from "../../../components/Navbar.js"


function OpenDoubt() {
  return (
    <div className='openDoubt'>

        <Navbar/>
        
        <div className="openDoubt_body">

            <div className="openDoubt_main">
                <div className="openDoubt_main_header">JAVA DOUBT</div>
                
                <div className="openDoubt_main_body">

                

                </div>
                <div className="openDoubt_main_footer">
                <span class="iconify-inline" data-icon="wpf:video-call" data-width="30" data-height="30"></span>
                </div>
            </div>
            <div className="openDoubt_rightBar">
                <div className="openDoubt_rightBar_navbar">
                <img src="/profile_img.jpeg" alt="njn" />
                <p>Arpit Goyal</p>

                
                </div>
                <hr />
                
                <div className="openDoubt_rightBar_messages"></div>
                <div className="openDoubt_rightBar_footer">
                <span class="iconify-inline openDoubt_attachIcon" data-icon="akar-icons:attach" data-width="20" data-height="20"></span>
                    <input id='openDoubt_send' type="text" placeholder='Write message...' />
                    <span  class="iconify-inline openDoubt_sendIcon" data-icon="fluent:send-20-filled" data-width="20" data-height="20"></span>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default OpenDoubt
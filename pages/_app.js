import "../styles/Login.css"
import '../styles/Navbar.css'
import "../styles/variables.css"
import "../styles/DoubtContainer.css"
import "../styles/index.css"
import "../styles/RightChatBar.css"
import "../styles/DoubtPage.css"
import "../styles/Modal.css"
import "../styles/debugger/DoubtCard.css"
import "../styles/debugger/Leftbar.css"
import "../styles/debugger/DebuggerHome.css"
import "../styles/debugger/DebuggerFilters.css"
import "../styles/student/StudentHome.css"
import "../styles/student/StudentLeftbar.css"
import "../styles/student/StudentDoubtCard.css"
import "../styles/student/Filters.css"
import "../styles/student/NewDoubt.css"
import "../styles/debugger/DebuggerProfile.css"
import "../styles/UserChart.css"
import "../styles/debugger/DoubtModal.css"
import "../styles/student/NotificationHandle.css"



import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
  <div id="root">
  <Script src="https://code.iconify.design/2/2.1.2/iconify.min.js" />
  <Component {...pageProps} />
  </div>
  )}

export default MyApp

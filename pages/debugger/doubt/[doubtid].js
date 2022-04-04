import Navbar from "../../../components/Navbar.js";

function DoubtPage() {
	return (
		<>
			<Navbar />
			<div className="doubtPage">
				<div className="doubtPage_body">
					<div className="left">
						<div className="doubtPage_main">
							<div className="doubtPage_mainHead">JAVA DOUBT</div>
                            <div className="doubtPage_mainBody"></div>
						</div>
						<div className="left_footer">
							<span
								className="iconify-inline"
								data-icon="wpf:video-call"
								data-width="30"
								data-height="30"
							/>
							<span
								className="iconify-inline active"
								data-icon="wpf:video-call"
								data-width="30"
								data-height="30"
							/>
							<span
								className="iconify-inline"
								data-icon="wpf:video-call"
								data-width="30"
								data-height="30"
							/>
						</div>
					</div>
					<div className="right">
						<div className="doubtPage_chatHead">
							<img src="/profile_img.jpeg" alt="njn" />
							<p>Arpit Goyal</p>
						</div>
						<hr />

						<div className="doubtPage_messages"></div>
						<div className="sendMessage">
							<span
								className="iconify-inline"
								data-icon="akar-icons:attach"
								data-width="20"
								data-height="20"
							></span>
							<div className="inputBox">
								<input className="send" type="text" placeholder="Write message..." />
								<span
									className="iconify-inline"
									data-icon="fluent:send-20-filled"
									data-width="20"
									data-height="20"
								></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DoubtPage;

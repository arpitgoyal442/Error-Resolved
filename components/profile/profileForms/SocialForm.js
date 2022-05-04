import { useState } from "react";

const SocialForm = ({ setShowModal }) => {
	const [linkedin, setLinkedin] = useState("kashishjain04"),
		[github, setGithub] = useState("Kashishjain04"),
    [instagram, setInstagram] = useState("kashish_jain04"),
    [twitter, setTwitter] = useState("Kashish_jain04");

	const cancel = () => {
		setLinkedin("kashishjain04");
    setGithub("Kashishjain04");
    setInstagram("kashish_jain04");
    setTwitter("Kashish_jain04");
		setShowModal(false);
	};

	return (
		<form className="max-w-xl w-full p-4 rounded-lg border bg-white" onSubmit={(e) => e.preventDefault()}>
			<h2 className="text-xl font-medium -mx-4 px-4 pb-4 mb-4 border-b">Social Media Handles</h2>
			<div className="flex items-center gap-x-2 py-2 border-b -mx-4 px-4">
				<p className="text-gray-500 uppercase flex-[0.3] text-xs">Linkedin</p>
				<input
					className="outline-none flex-1 w-full"
					type="text"
					value={linkedin}
					onChange={(e) => setLinkedin(e.target.value)}
          required
				/>
			</div>
			<div className="flex items-center gap-x-2 py-2 border-b -mx-4 px-4">
				<p className="text-gray-500 uppercase flex-[0.3] text-xs">Github</p>
				<input
					className="outline-none flex-1 w-full"
					type="text"
					value={github}
					onChange={(e) => setGithub(e.target.value)}
          required
				/>
			</div>
			<div className="flex items-center gap-x-2 py-2 border-b -mx-4 px-4">
				<p className="text-gray-500 uppercase flex-[0.3] text-xs">Instagram</p>
				<input
					className="outline-none flex-1 w-full"
					type="text"
					value={instagram}
					onChange={(e) => setInstagram(e.target.value)}
          required
				/>
			</div>
			<div className="flex items-center gap-x-2 py-2 border-b -mx-4 px-4">
				<p className="text-gray-500 uppercase flex-[0.3] text-xs">Twitter</p>
				<input
					className="outline-none flex-1 w-full"
					type="text"
					value={twitter}
					onChange={(e) => setTwitter(e.target.value)}
          required
				/>
			</div>
			<div className="mt-4 flex items-center justify-end gap-x-2">
				<button
					onClick={cancel}
					className="border border-highlight text-highlight px-3 py-1 rounded-lg hover:shadow-md"
				>
					Cancel
				</button>
				<button type="submit" className="bg-highlight text-white px-3 py-1 rounded-lg hover:shadow-md">Save</button>
			</div>
		</form>
	);
};

export default SocialForm;

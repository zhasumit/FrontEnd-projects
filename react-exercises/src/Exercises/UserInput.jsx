import { useState } from "react";

const UserInput = () => {
	const [input, setInput] = useState("");

	return (
		<div className=" bg-blue-950 h-lvh text-5xl grid items-center overflow-hidden justify-items-center text-center mx-auto">
			<p className="text-white grid border-spacing-12">
				<input
					className="w-[700px] m-10 text-orange-500 text-center "
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<span className="text-cyan-200 text-7xl">{input}</span>
			</p>
		</div>
	);
};

export default UserInput;

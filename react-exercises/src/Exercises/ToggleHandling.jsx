import { useState } from "react";

const ToggleHandling = () => {
	const [toggled, flipToggle] = useState(false);

	const handleToggle = () => {
		flipToggle(!toggled);
	};

	function showToggle() {
		if (toggled)
			return (
				<span className=" text-green-400 py-7 my-10 space-x-11">
					True
				</span>
			);
		return (
			<span className=" text-red-400 py-7 my-10 space-x-11">False</span>
		);
	}

	return (
		<div className=" bg-blue-950 h-lvh text-center mx-auto p-72 text-7xl">
			<input
				type="checkbox"
				onChange={handleToggle}
				className="h-10 w-10"
			/>{" "}
			{showToggle()}
		</div>
	);
};

export default ToggleHandling;

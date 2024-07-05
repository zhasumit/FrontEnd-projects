import { useState } from "react";

const Counter = () => {
	let [count, setCount] = useState(0);

	function cnt() {
		if (count > 0)
			return <span className=" text-green-400 w-4">{count}</span>;
		return <span className=" text-red-400 w-4">{count}</span>;
	}
	return (
		<div className=" bg-blue-950 h-lvh text-7xl grid items-center justify-items-center text-center mx-auto">
			<p className="text-white spa border-spacing-y-24">
				<button onClick={() => setCount(count - 1)}> - </button>
				{cnt()}
				<button onClick={() => setCount(count + 1)}> + </button>
			</p>
		</div>
	);
};

export default Counter;

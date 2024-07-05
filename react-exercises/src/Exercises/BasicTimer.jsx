import { useEffect, useState } from "react";

const BasicTimer = () => {
	const [time, setTime] = useState(60);

	useEffect(() => {
		if (time > 0) {
			const timer = setTimeout(() => setTime(time - 1), 1000);
			return () => clearInterval(timer);
		}
	}, [time]);
	return (
		<div className=" bg-blue-950 h-lvh text-9xl grid items-center justify-items-center text-center mx-auto">
			<p className="text-white">
				⌛
				{time < 10 ? (
					<span className=" text-red-400 py-7 my-10 space-x-11">
						{time} sec
					</span>
				) : (
					<span className=" text-green-400 py-7 my-10 space-x-11">
						{time} sec
					</span>
				)}
			</p>
		</div>
	);
};

export default BasicTimer;

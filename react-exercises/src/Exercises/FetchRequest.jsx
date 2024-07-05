import { useEffect, useState } from "react";

const FetchRequest = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => response.json())
			.then((json) => setData(json));
	}, []);

	return (
		<div className=" bg-blue-950 h-lvh text-2xl grid items-center justify-items-center text-center mx-auto text-white">
			{data ? (
				<div>
					<h1 className="text-green-400">Title: {data.title}</h1>
					<h1 className="text-cyan-300">Body: {data.body}</h1>
				</div>
			) : (
				<p>loading ...</p>
			)}
		</div>
	);
};

export default FetchRequest;

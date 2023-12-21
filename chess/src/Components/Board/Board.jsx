import "./Board.css";
import { getChar } from "../../helper.js";
import React from "react";

function Board() {
	const ranks = Array(8)
		.fill()
		.map((x, i) => 8 - i);

	const files = Array(8)
		.fill()
		.map((x, i) => getChar(i));

	const getclassName = (i, j) => {
		let c = "tile";
		c += (i + j) % 2 === 0 ? " tile--light" : " tile--dark";
		return c;
	};
    
	return (
		<div className="board">
			<div className="tiles">
				{ranks.map((rank, i) =>
					files.map((file, j) => (
						<div
							key={file + "-" + rank}
							className={getclassName(i, j)}
						>
							{rank}
							{file}
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default Board;

import React from "react";
import "./Rank.css";
function Rank({ ranks }) {
	return (
		<div className="ranks">
			{ranks.map((rank) => (
				<span key={rank}>{rank}</span>
			))}
		</div>
	);
}

export default Rank;

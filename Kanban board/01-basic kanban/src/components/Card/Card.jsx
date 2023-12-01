import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import "./Card.css";
import Chips from "../Chips/Chips";
function Card() {
	return (
		<div className="card">
			<div className="card_top">
				<div className="card_top_labels">
					<Chips text="Sumit" color="green" />
					<Chips close text="Sumit" color="green" />
				</div>
				<MoreHorizontal />
			</div>
			<div className="card_title">asdfasddff asdf a sddf asddf </div>
			<div className="card_footer">
				<p>
					<Clock /> 30 Nov
				</p>
				<p>
					<CheckSquare /> 1/4
				</p>
			</div>
		</div>
	);
}

export default Card;

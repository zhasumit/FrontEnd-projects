import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import "./Board.css";
import { MoreHorizontal } from "react-feather";

function Board() {
	return (
		<div className="board">
			<div className="board_top">
				<p className="board_top_title">
					To Do <span>2</span>
				</p>
				<MoreHorizontal />
			</div>
			<div className="board_cards custom-scroll">
				<Card />
				<Editable
					displayClass="boards_cards_add"
					text="Add Card"
					placeholder="Enter card title"
				/>
			</div>
		</div>
	);
}

export default Board;

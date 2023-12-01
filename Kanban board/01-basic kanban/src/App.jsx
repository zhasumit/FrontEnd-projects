import "./App.css";
import Board from "./components/Board/Board";
import Editable from "./components/Editable/Editable";

function App() {
	return (
		<div className="app">
			<div className="app_navbar">
				<h2>Kanban Board</h2>
			</div>

			<div className="app_outer">
				<div className="app_board">
					<Board />
					<Board />
					<div className="app_boards_board">
						<Editable
							displayClass="boards_cards_add"
							text="Add board"
							placeholder="Enter card title"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

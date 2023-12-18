import { useState } from "react";

function Todolist() {
	interface item {
		id: number;
		text: string;
		completed: boolean;
	}

	const [todos, setTodos] = useState<item[]>([
		{ id: 1, text: "Open Todo", completed: true },
		{ id: 2, text: "Slay the day", completed: false },
	]);

	const handleToggle = (id: number) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id)
					return { ...todo, completed: !todo.completed };
				return todo;
			})
		);
	};

	const [input, setInput] = useState<string>("");

	const handleAdd = () => {
		const newTodo: item = { id: Date.now(), text: input, completed: false };
		setTodos([...todos, newTodo]);
	};

	const handleMarkAll = () => {
		setTodos(
			todos.map((todo) => {
				return { ...todo, completed: true };
			})
		);
	};

	const handleRemoveAll = () => {
		setTodos([]);
	};

	return (
		<>
			<div className="todolist-main-container">
				<h1>To do List </h1>
				<ul>
					{todos.map((todo) => (
						<li
							key={todo.id}
							onClick={() => handleToggle(todo.id)}
							style={{
								textDecoration: todo.completed
									? "line-through"
									: "none",
								color: todo.completed ? "#50c878" : "white",
							}}
						>
							{todo.text}
						</li>
					))}
				</ul>
				<input
					id="inputfield"
					type="text"
					placeholder="Add item"
					onChange={(e) => setInput(e.currentTarget.value)}
				/>
				<button
					onClick={handleAdd}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleAdd;
					}}
				>
					➕
				</button>
				<br />
				<div className="btns">
					<button id="blue" onClick={handleMarkAll}>
						✔️ All done
					</button>
					<button id="pink" onClick={handleRemoveAll}>
						❌ Remove all
					</button>
				</div>
			</div>
		</>
	);
}

export default Todolist;

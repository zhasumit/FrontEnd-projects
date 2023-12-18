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
	return (
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
			<input type="text" placeholder="Add item" />
			<button>➕</button>
		</div>
	);
}

export default Todolist;

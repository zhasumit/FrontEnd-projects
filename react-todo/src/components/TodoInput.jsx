const TodoInput = ({ addTodo, todoValue, setTodoValue }) => {
	return (
		<header>
			<input
				value={todoValue}
				onChange={(e) => {
					setTodoValue(e.target.value);
				}}
				placeholder="Enter todo..."
			/>
			<button
				onClick={() => {
					addTodo(todoValue);
					setTodoValue("");
				}}
			>
				+
			</button>
		</header>
	);
};

export default TodoInput;

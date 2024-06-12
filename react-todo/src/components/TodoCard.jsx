const TodoCard = ({ children, deleteTodo, index, editTodo }) => {
	return (
		<div>
			<li className="todoItem">
				{children}
				<div className="actionsContainer">
					<button onClick={()=>{editTodo(index)}}>
						<i class="fa-regular fa-pen-to-square"></i>
					</button>
					<button
						onClick={() => {
							deleteTodo(index);
						}}
					>
						<i class="fa-solid fa-eraser"></i>
					</button>
				</div>
			</li>
		</div>
	);
};

export default TodoCard;

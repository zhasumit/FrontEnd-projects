function Todolist() {
	return (
		<div className="todolist-main-container">
			<h1>To do List </h1>
			<ul>
				<li>item 1</li>
				<li>item 2</li>
			</ul>
			<input type="text" placeholder="Add item" />
			<button>➕</button>
		</div>
	);
}

export default Todolist;

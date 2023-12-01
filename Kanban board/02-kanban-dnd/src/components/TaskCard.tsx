import { useState } from "react";

import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "../types";

interface Props {
	task: Task;
	deleteTask: (id: Id) => void;
}

function TaskCard({ task, deleteTask }: Props) {
	const [mouseIsOver, setMouseIsOver] = useState(false);

	return (
		<div
			className="p-2.5
            bg-gray-950/20
            min-h-[100px]
            max-h-auto
            items-center
            flex
            text-left
            rounded-xl
            hover:ring-2
            hover:ring-inset
            hover:ring-blue-950/60
            cursor-grab
            relative
            "
			onMouseEnter={() => {
				setMouseIsOver(true);
			}}
			onMouseLeave={() => {
				setMouseIsOver(false);
			}}
		>
			{task.content}
			{mouseIsOver && (
				<button
					onClick={() => {
						deleteTask(task.id);
					}}
					className=" absolute right-4 
            top-1/2 translate-y-1/3 p-2 bg-coloumnBackgroundColor
                stroke-gray-500 
                hover:stroke-red-900
                hover:bg-red-300
                rounded-md
                px-1
                py-2
                opacity-70
                hover:opacity-100
                "
				>
					<TrashIcon />
				</button>
			)}
		</div>
	);
}

export default TaskCard;

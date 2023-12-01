import { useState, useMemo } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column } from "../types";
import ColumnContainer from "./ColumnContainer";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

function KanbanBoard() {
	const [columns, setColumns] = useState<Column[]>([]);
	const columsId = useMemo(() => columns.map((col) => col.id), [columns]);

	return (
		<div
			className=" 
				m-auto 
				flex 
				min-h-screen 
				w-full 
				items-center 
				overflow-x-auto 
				overflow-y-hidden 
				px-[40px]"
		>
			<DndContext>
				<div className="m-auto flex gap-4">
					<div className="flex gap-4">
						<SortableContext items={columsId}>
							{columns.map((col) => (
								<ColumnContainer
									key={col.id}
									column={col}
									deleteColumn={deleteColumn}
								/>
							))}
						</SortableContext>
					</div>
					<button
						onClick={() => {
							createNewColumn();
						}}
						className="h-[50px] 
					w-[300px] 
					min-w-[300px] 
					cursor-pointer 
					rounded-lg
					bg-mainBackgroundColor 
					border-2  
					items-center
					border-coloumnBackgroundColor 
					p-2 ring-blue-500/3 hover:ring-2
					flex
					gap-2"
					>
						<PlusIcon />
						Add Coloumn
					</button>
				</div>
			</DndContext>
		</div>
	);
	
	function createNewColumn() {
		const columnToAdd: Column = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		};
		setColumns([...columns, columnToAdd]);
	}

	function deleteColumn(id: Id) {
		const filteredColumns = columns.filter((col) => col.id !== id);
		setColumns(filteredColumns);
	}
	function generateId() {
		return Math.floor(Math.random() * 10001);
	}
}

export default KanbanBoard;

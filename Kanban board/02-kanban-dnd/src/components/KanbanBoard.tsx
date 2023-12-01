import { useState, useMemo } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column } from "../types";
import ColumnContainer from "./ColumnContainer";
import {
	DndContext,
	DragEndEvent,
	DragOverlay,
	DragStartEvent,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

function KanbanBoard() {
	const [columns, setColumns] = useState<Column[]>([]);
	const columsId = useMemo(() => columns.map((col) => col.id), [columns]);

	const [activeColumn, setActiveColumn] = useState<Column | null>(null);

	// New Hook to sense the delete button from overall dragability
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 3,
				// 3px lag allowed
			},
		})
	);

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
			{/* add context of dragging */}
			<DndContext
				sensors={sensors}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
			>
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

				{createPortal(
					<DragOverlay>
						{activeColumn && (
							<ColumnContainer
								column={activeColumn}
								deleteColumn={deleteColumn}
							/>
						)}
					</DragOverlay>,
					document.body
				)}
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

	function onDragStart(event: DragStartEvent) {
		console.log("DRAG started ...", event);
		if (event.active.data.current?.type === "Column") {
			setActiveColumn(event.active.data.current.column);
			return;
		}
	}

	function onDragEnd(event: DragEndEvent) {
		const { active, over } = event;
		if (!over) return;
		const activeColumnId = active.id;
		const overColumnId = over.id;

		if (activeColumnId === overColumnId) return;
		{
			/* Swap the coloums otherwise */
		}
		setColumns((columns) => {
			const activeColumnIndex = columns.findIndex(
				(col) => col.id === activeColumnId
			);

			const overColumnIndex = columns.findIndex(
				(col) => col.id === overColumnId
			);

			return arrayMove(columns, activeColumnIndex, overColumnIndex);
		});
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

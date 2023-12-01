import TrashIcon from "../icons/TrashIcon";
import { Column, Id } from "../types";

// properties of the col container
interface Props {
	column: Column;
	deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
	const { column, deleteColumn } = props;
	return (
		<div
			className=" 
        bg-coloumnBackgroundColor 
        w-[300px]
        h-[500px]
        rounded-md
        flex
        flex-col
        "
		>
			{/* Title */}
			<div
				className="
                bg-gray-950
                h-[60px]
                cursor-grab
                rounded-md
                rounded-b-none
                p-3
                font-bold
                border-coloumnBackgroundColor
                border-4
                flex
                items-center
                justify-between
            "
			>
				<div className="flex gap-2">
					<div
						className="
                    flex
                    justify-center
                    items-center
                    bg-coloumnBackgroundColor
                    px-2
                    py-1
                    text-sm
                    rounded-md
                "
					>
						0
					</div>
					{column.title}
				</div>
				<button
					onClick={() => {
						deleteColumn(column.id);
					}}
					className="
                stroke-gray-500 
                hover:stroke-red-900
                hover:bg-red-300
                rounded-md
                px-1
                py-2
                "
				>
					<TrashIcon />
				</button>
			</div>

			{/* Body*/}
			<div className="flex flex-grow">Content</div>

			{/* Footer*/}
			<div>footer</div>
		</div>
	);
}

export default ColumnContainer;

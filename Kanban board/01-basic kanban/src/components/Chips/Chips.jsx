import { X } from "react-feather";
import "./Chips.css";
function Chips(props) {
	return (
		<div className="chip" style={{ backgroundColor: props.color }}>
			{props.text}
			{props.close && (
				<X onClick={props.onClose ? props.onClose() : ""} />
			)}
		</div>
	);
}

export default Chips;

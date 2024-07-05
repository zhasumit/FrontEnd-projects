const ListItem = () => {
	const items = ["Aloo", "Pyaj", "Tamatar", "Kaddu", "Alhua", "Baigan", "Gobi", "Matar"];
	return (
		<div className=" bg-blue-950 h-lvh text-xl grid items-center justify-items-center text-center mx-auto">
			<ul className="text-white">
				{items.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
			</ul>
		</div>
	);
};

export default ListItem;

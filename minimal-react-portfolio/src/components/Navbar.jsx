import logo from "../assets/logo.png";
function Navbar() {
	return (
		<nav className="mb-20 flex items-center justify-between">
			<div className="flex flex-shrink-0 items-center">
				<img className="mx-2  w-6" src={logo} alt="SKJ logo" />SUMIT JHA
			</div>
			<div className="m-8 flex flex-shrink-0 gap-7 ">
				<a href="#">About</a>
				<a href="#">Works</a>
				<a href="#">Contact</a>
			</div>
		</nav>
	);
}

export default Navbar;

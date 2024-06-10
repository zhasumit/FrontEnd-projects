import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<div className="overflow-x-hidden  text-neutral-200 antialiased selection:bg-[#363d44] selection:text-green-500">
			<div className="fixed top-0 z-0 h-full w-full">
				<div className="absolute top-0 z-[-2] h-screen w-screen bg-[#111010] bg-[radial-gradient(ellipse_70%_45%_at_70%_-20%,rgba(00,19,200,0.3),rgba(255,255,255,0))]"></div>

				<div className="container mx-auto px-72">
					<Navbar />
					<Hero />
				</div>

			</div>
		</div>
	);
}

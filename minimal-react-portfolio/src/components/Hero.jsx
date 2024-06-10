import dp from "../assets/sumitjha.png";
import mnnitLogo from "../assets/MNNIT.png";
import { PiHammerDuotone } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { GiAxeSword } from "react-icons/gi";
import { SiGmail } from "react-icons/si";

import c from "../assets/icons/C.svg";
import cpp from "../assets/icons/CPP.svg";
import python from "../assets/icons/Python-Dark.svg";
import ts from "../assets/icons/TypeScript.svg";
import bash from "../assets/icons/Bash-Dark.svg";

import html from "../assets/icons/HTML.svg";
import css from "../assets/icons/CSS.svg";
import sass from "../assets/icons/Sass.svg";
import js from "../assets/icons/JavaScript.svg";

import node from "../assets/icons/NodeJS-Dark.svg";
import npm from "../assets/icons/Npm-Dark.svg";
import express from "../assets/icons/ExpressJS-Dark.svg";
import go from "../assets/icons/GoLang.svg";

import mongoDB from "../assets/icons/MongoDB.svg";
import sql from "../assets/icons/MySQL-Dark.svg";

import ejs from "../assets/icons/ejs.svg";
import react from "../assets/icons/React-Dark.svg";
import redux from "../assets/icons/Redux.svg";
import bootstrap from "../assets/icons/Bootstrap.svg";
import tailwind from "../assets/icons/TailwindCSS-Dark.svg";

import ubuntu from "../assets/icons/Ubuntu-Dark.svg";
import andriod from "../assets/icons/android.svg";
import DevTools from "../assets/icons/devtools.png";

import figma from "../assets/icons/Figma-Dark.svg";
import git from "../assets/icons/Git.svg";
import github from "../assets/icons/Github-Dark.svg";
import docker from "../assets/icons/Docker.svg";

function Hero() {
	return (
		<>
			<div className="border-b border-neutral-900 pb-4 lg:mb-35">
				<div className="flex flex-wrap">
					<div className="w-full lg:w-1/4 border-red-100">
						<div className="flex flex-col items-center lg:items-start">
							<div className="p-1 rounded-full bg-gradient-to-tr from-pink-300 from-20% via-sky-200 via-30% to-blue-700 to-90%">
								<img className="rounded-full" src={dp} />
							</div>
						</div>
					</div>
					<div className="w-full lg:w-3/4 lg:px-5 leading-7 text-sm">
						<h1 className="text-2xl font-semibold leading-loose">
							hey, I'm Sumit 👋
						</h1>
						<div className="tracking-wide text-gray-300/90">
							I am a full stack developer, optimist, and community
							builder. I am an undergrad from{" "}
							<a
								className="bg-[#262626] p-1 rounded-md border-[1px] border-[#404040]"
								href="https://mnnit.ac.in/"
								target="_blank"
							>
								{" "}
								<img
									className="inline h-3"
									src={mnnitLogo}
								/>{" "}
								MNNIT Allahabad
							</a>
							. Have a knack of bulding responsive and designer
							web apps. Actively looking for intriguing
							challanges.
						</div>
						<div className="mt-7 flex gap-3 text-xl flex-row-reverse">
							<a className="bg-[#262626] p-[8px] rounded-full border-[1px] border-[#404040] bg-gradient-to-r hover:from-pink-600 hover:to-yellow-400 hover:border-pink-700">
								<FaInstagram />
							</a>
							<a className="bg-[#262626] p-[8px] rounded-full border-[1px] border-[#404040] hover:bg-[#9a9a9a93] hover:border-[#585858]">
								<FaXTwitter />
							</a>
							<a className="bg-[#262626] p-[8px] rounded-full border-[1px] border-[#404040] hover:bg-[#2fbbb499] hover:border-[#2fbbb3]">
								<SiGmail />
							</a>
							<a className="bg-[#262626] p-[8px] rounded-full border-[1px] border-[#404040] hover:bg-[#0a66c2] hover:border-[#074b8f]">
								<FaLinkedinIn />
							</a>
							<a className="bg-[#262626] p-[8px] rounded-full border-[1px] border-[#404040] hover:bg-[#65719e] hover:border-[#343a51]">
								<LuGithub />
							</a>
							<a className="bg-[#262626] p-[8px] rounded-full border-[1px] border-[#404040] hover:bg-[#f79f1bbf] hover:border-[#f79f1b]">
								<TbBrandLeetcode />
							</a>
							<a className="bg-[#262626] p-[8px] rounded-full border-[1px] border-[#404040] hover:bg-green-700 hover:border-green-900">
								<PiHammerDuotone />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<div className="flex flex-wrap">
					<h1 className="flex items-center gap-2 text-xl text-neutral-300">
						{" "}
						<GiAxeSword className="text-[#5092ff]" />
						Tool arsenal
					</h1>
					<div className="flex justify-center flex-wrap gap-3 mt-5">
						<img className="h-8 " src={c} title="C" />
						<img className="h-8" src={cpp} title="C++" />
						<img className="h-8" src={python} title="python" />
						<img className="h-8" src={ts} title="TypeScript" />
						<img className="h-8" src={bash} title="bash" />

						<img className="h-8" src={html} title="HTML" />
						<img className="h-8" src={css} title="CSS" />
						<img className="h-8" src={js} title="JavaScript" />
						<img className="h-8" src={sass} title="Sass" />

						<img className="h-8" src={node} title="nodeJS" />
						<img
							className="h-8"
							src={npm}
							title="node-package-manager"
						/>
						<img className="h-8" src={express} title="express" />
						<img className="h-8" src={go} title="goLang" />

						<img className="h-8" src={mongoDB} title="MongoDB" />
						<img className="h-8" src={sql} title="MySQL" />

						<img className="h-8" src={ejs} title="ejs" />
						<img className="h-8" src={react} title="react" />
						<img className="h-8" src={redux} title="redux" />
						<img className="h-8" src={tailwind} title="tailwind" />
						<img
							className="h-8"
							src={bootstrap}
							title="bootstrap"
						/>

						<img className="h-8" src={ubuntu} title="ubuntu" />
						<img className="h-8" src={andriod} title="android" />
						<img
							className="h-8"
							src={DevTools}
							title="chrome-devtools"
						/>

						<img className="h-8" src={figma} title="figma" />
						<img className="h-8" src={git} title="git" />
						<img className="h-8" src={github} title="gitHub" />
						<img className="h-8" src={docker} title="Docker" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;

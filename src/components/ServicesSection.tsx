import { FaLaptopCode, FaPaintBrush, FaMicrochip, FaNetworkWired, FaHome, FaRobot, FaJava } from "react-icons/fa";
import { SiSpring, SiMongodb, SiArduino, SiPython, SiTensorflow, SiOpenai } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const services = [
	{
		icon: <FaLaptopCode className="text-blue-400 text-3xl md:text-4xl" />,
		title: "Web App Development",
		tech: [
			<SiSpring key="spring" className="text-green-400" />,
			<SiMongodb key="mongo" className="text-green-500" />,
			<FaJava key="java" className="text-[#f89820]" />, // Java as primary
		],
		desc: "Full-stack web apps using Java (Spring Boot), MERN stack. Scalable, robust, and modern solutions.",
	},
	{
		icon: <FaJava className="text-[#f89820] text-3xl md:text-4xl" />, // Java as primary
		title: "Standalone Apps",
		tech: [
			<FaJava key="java" className="text-[#f89820]" />,
			<SiPython key="python" className="text-blue-400" />,
		],
		desc: "Cross-platform desktop apps in Java & Python. Fast, reliable, and user-friendly.",
	},
	{
		icon: <FaPaintBrush className="text-pink-400 text-3xl md:text-4xl" />,
		title: "Web Design",
		tech: [],
		desc: "Creative, responsive, and accessible web designs tailored to your brand.",
	},
	{
		icon: <FaMicrochip className="text-violet-400 text-3xl md:text-4xl" />,
		title: "Custom Hardware Solutions",
		tech: [
			<SiArduino key="arduino" className="text-blue-400" />,
			<span key="esp" className="text-[#3eaeea] font-bold text-lg ml-1">ESP</span>,
		],
		desc: "Custom electronics with Arduino & ESP for unique hardware needs.",
	},
	{
		icon: <FaNetworkWired className="text-cyan-400 text-3xl md:text-4xl" />,
		title: "IoT & Home Automation",
		tech: [<FaHome key="home" className="text-blue-400" />],
		desc: "Smart home & IoT solutions for automation, monitoring, and control.",
	},
	{
		icon: <GiArtificialIntelligence className="text-yellow-400 text-3xl md:text-4xl" />,
		title: "AI Solutions",
		tech: [
			<SiTensorflow key="tf" className="text-orange-500" />,
			<SiOpenai key="openai" className="text-green-400" />,
			<FaRobot key="robot" className="text-purple-500" />,
		],
		desc: "AI agents, automation, and intelligent solutions using modern AI frameworks.",
	},
];

const ServicesSection = () => {
	return (
		<section className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#0f1624] to-[#0f1a2d]" id="services">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 text-center">
					What I Do
				</h2>
				<p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
					I offer a range of services from web development to custom hardware and IoT solutions, 
					blending creativity with technical expertise.
				</p>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="bg-[#162137]/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-blue-900/20 
									 transition-all duration-300 p-8 flex flex-col items-center text-center 
									 border-t-4 border-blue-900 hover:border-blue-400 transform hover:-translate-y-1"
						>
							<div className="mb-4 transform hover:scale-110 transition-transform duration-300">
								{service.icon}
							</div>
							<h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
										 from-blue-300 to-cyan-200 mb-2">
								{service.title}
							</h3>
							<div className="flex justify-center items-center gap-3 mb-3">
								{service.tech.map((icon, i) => (
									<span key={i} className="transform hover:scale-110 transition-transform duration-300">
										{icon}
									</span>
								))}
							</div>
							<p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
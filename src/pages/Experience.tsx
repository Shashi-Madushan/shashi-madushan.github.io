import { FaBriefcase, FaBuilding, FaCalendar,  FaGraduationCap  } from "react-icons/fa";

const education = [
	{
		degree: "Bachelor of Computer Science",
		institution: "Your University Name",
		period: "2020 - Present",
		description: "Specializing in Software Engineering",
		achievements: [
			"Current GPA: 3.8/4.0",
			"Dean's List 2021-2022",
			"Lead developer in final year project",
		],
	},
	{
		degree: "Advanced Level",
		institution: "Your School Name",
		period: "2017 - 2019",
		description: "Physical Science Stream",
		achievements: ["Combined Maths (A)", "Physics (A)", "Chemistry (B)"],
	},
];

const experiences = [
	{
		title: "Freelance Full-stack Developer",
		company: "Self-Employed",
		period: "2018 - Present",
		description:
			"Providing end-to-end software solutions for clients worldwide, specializing in web, desktop, and automation projects using Java, Spring Boot, Python, ElectronJS, and modern web technologies.",
		responsibilities: [
			"Developed scalable web applications with Java (Spring Boot), React, and Node.js",
			"Built cross-platform desktop apps using ElectronJS and JavaFX",
			"Created automation scripts and utilities in Python",
			"Integrated databases (MongoDB, SQL) and RESTful APIs",
			"Designed and delivered user-friendly interfaces and responsive designs",
			"Managed the full project lifecycle: requirements, development, deployment, and support",
		],
	},
];

const EducationAndExperience = () => {
	return (
		<div className="bg-gradient-to-b from-[#0f1624] to-[#0f1a2d] min-h-screen p-5  md:p-8">
			<h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-12 text-center ">
				Experience & Education
			</h2>

			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
					{/* Experience Section */}
					<div className="flex-1">
						<h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 flex items-center gap-2 border-b border-blue-800/30 pb-2">
							<FaBriefcase className="text-blue-400" /> Professional Experience
						</h3>
						<div className="space-y-6">
							{experiences.map((exp, index) => (
								<div
									key={index}
									className="bg-[#162137]/80 backdrop-blur-sm p-6 rounded-lg border border-blue-900/20 hover:border-blue-500/30 transition-all duration-300"
								>
									<div className="flex items-start gap-4">
										<div className="bg-blue-900/20 rounded-lg p-3 mt-1">
											<FaBuilding className="text-blue-400 text-xl" />
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-medium text-blue-200">
												{exp.title}
											</h4>
											<div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
												<span>{exp.company}</span>
												<span>•</span>
												<span className="flex items-center gap-1">
													<FaCalendar className="text-cyan-400" size={12} />
													{exp.period}
												</span>
											</div>
											<p className="text-gray-300 mt-3 text-sm leading-relaxed">
												{exp.description}
											</p>
											<div className="mt-4">
												<h5 className="text-sm font-medium text-blue-300 mb-2">
													Key Responsibilities
												</h5>
												<ul className="space-y-1">
													{exp.responsibilities.map((resp, idx) => (
														<li
															key={idx}
															className="text-gray-400 text-sm flex items-start gap-2"
														>
															<span className="text-blue-400 mt-1.5">•</span>
															<span>{resp}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Vertical Divider for Desktop */}
					<div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-blue-900/50 to-transparent" />

					{/* Education Section */}
					<div className="flex-1">
						<h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 flex items-center gap-2 border-b border-blue-800/30 pb-2">
							<FaGraduationCap className="text-blue-400" /> Education
						</h3>
						<div className="space-y-6">
							{education.map((edu, index) => (
								<div
									key={index}
									className="bg-[#162137]/80 backdrop-blur-sm p-6 rounded-lg border border-blue-900/20 hover:border-blue-500/30 transition-all duration-300"
								>
									<div className="flex items-start gap-4">
										<div className="bg-blue-900/20 rounded-lg p-3 mt-1">
											<FaGraduationCap className="text-blue-400 text-xl" />
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-medium text-blue-200">
												{edu.degree}
											</h4>
											<div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
												<span>{edu.institution}</span>
												<span>•</span>
												<span className="flex items-center gap-1">
													<FaCalendar className="text-cyan-400" size={12} />
													{edu.period}
												</span>
											</div>
											<p className="text-gray-300 mt-3 text-sm leading-relaxed">
												{edu.description}
											</p>
											<div className="mt-4">
												<h5 className="text-sm font-medium text-blue-300 mb-2">
													Achievements
												</h5>
												<ul className="space-y-1">
													{edu.achievements.map((achievement, idx) => (
														<li
															key={idx}
															className="text-gray-400 text-sm flex items-start gap-2"
														>
															<span className="text-blue-400 mt-1.5">•</span>
															<span>{achievement}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};





export default EducationAndExperience;

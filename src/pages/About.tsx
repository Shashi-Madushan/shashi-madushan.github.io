import { FaUserAstronaut, FaCode, FaServer, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaCogs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiExpress, SiSpring, SiHibernate, SiMysql, SiElectron, SiSpringboot, SiNextdotjs, SiArduino, SiEspressif, SiDigitalocean } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f1624] to-[#0f1a2d] min-h-screen p-5 md:p-8">
      <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-8 text-center flex items-center justify-center gap-3">
        <FaUserAstronaut className="text-blue-300" /> About Me
      </h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Who am I */}
        <section className="bg-[#162137]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-blue-900/20 transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-full p-6 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <FaUserAstronaut className="text-blue-400 text-5xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 flex items-center gap-2">
              Who am I?
            </h3>
            <div className="space-y-4 tracking-wide">
              <p className="text-gray-200 leading-relaxed text-lg">
                I'm a passionate <span className="text-blue-400 font-semibold">Full-stack Developer</span> and 
                <span className="text-cyan-400 font-semibold"> Tech Enthusiast</span> who thrives on turning complex 
                problems into elegant solutions.
              </p>
              <div className="space-y-4 pl-4 border-l-2 border-blue-800">
                <p className="text-gray-300">
                  <span className="text-blue-300 font-semibold">💡 Innovation Driver:</span> From crafting scalable web applications 
                  to designing custom hardware solutions, I'm always pushing the boundaries of what's possible.
                </p>
                <p className="text-gray-300">
                  <span className="text-cyan-300 font-semibold">🔧 Problem Solver:</span> I specialize in full-stack development 
                  with Java/Spring Boot, MERN stack, and creating intuitive user experiences that make an impact.
                </p>
                <p className="text-gray-300">
                  <span className="text-blue-300 font-semibold">🤖 Tech Explorer:</span> My passion extends to IoT, home automation, 
                  and AI solutions, where I leverage cutting-edge technologies to build smart, connected systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section className="bg-[#162137]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 flex items-center gap-2">
            <FaCode className="text-blue-400" /> Skills & Technologies
          </h3>
          
          <div className="space-y-8">
            {/* Update the skill category headers */}
            <div>
              <h4 className="text-xl font-medium mb-4 text-blue-200 border-b border-blue-800/50 pb-2">
                Frontend Technologies
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {/* React */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaReact className="text-3xl text-cyan-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">React</p>
                </div>
                {/* Next.js */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiNextdotjs className="text-3xl text-gray-200" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Next.js</p>
                </div>
                {/* Tailwind */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiTailwindcss className="text-3xl text-sky-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Tailwind</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaHtml5 className="text-3xl text-orange-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">HTML5</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaCss3Alt className="text-3xl text-blue-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">CSS3</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaJs className="text-3xl text-yellow-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">JavaScript</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiTypescript className="text-3xl text-blue-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">TypeScript</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaJava className="text-3xl text-orange-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">JavaFX</p>
                </div>
                
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-xl font-medium mb-4 text-blue-200 border-b border-blue-800/50 pb-2">Backend Technologies</h4>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaNodeJs className="text-3xl text-green-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Node.js</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiExpress className="text-3xl text-gray-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Express</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaJava className="text-3xl text-red-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Java</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiSpring className="text-3xl text-green-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Spring Boot</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiMysql className="text-3xl text-blue-500" />
                  </div>
                  <p className="text-center text-sm text-blue-200">MySQL</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiPostgresql className="text-3xl text-blue-500" />
                  </div>
                  <p className="text-center text-sm text-blue-200">PostgreSQL</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiHibernate className="text-3xl text-yellow-500" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Hibernate</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiSpringboot className="text-3xl text-green-500" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Spring JPA</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaServer className="text-3xl text-yellow-600" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Tomcat</p>
                </div>
              </div>
            </div>

            {/* Tools & Others */}
            <div>
              <h4 className="text-xl font-medium mb-4 text-blue-200 border-b border-blue-800/50 pb-2">Tools & Other Skills</h4>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {/* Git */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaGitAlt className="text-3xl text-orange-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Git</p>
                </div>
                {/* Docker */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaDocker className="text-3xl text-blue-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Docker</p>
                </div>
                {/* AWS */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaAws className="text-3xl text-yellow-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">AWS</p>
                </div>
                {/* DigitalOcean */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiDigitalocean className="text-3xl text-blue-300" />
                  </div>
                  <p className="text-center text-sm text-blue-200">DigitalOcean</p>
                </div>
                {/* Python */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaPython className="text-3xl text-blue-300" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Python</p>
                </div>
                {/* Arduino */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiArduino className="text-3xl text-blue-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Arduino</p>
                </div>
                {/* ESP */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiEspressif className="text-3xl text-gray-300" />
                  </div>
                  <p className="text-center text-sm text-blue-200">ESP</p>
                </div>
                {/* <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiIntellijidea className="text-3xl text-pink-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">IntelliJ IDEA</p>
                </div> */}
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <FaCogs className="text-3xl text-red-500" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Maven</p>
                </div>
                <div className="bg-[#1B2942] p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <SiElectron className="text-3xl text-cyan-400" />
                  </div>
                  <p className="text-center text-sm text-blue-200">Electron</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';



const HeroSection: React.FC = () => {

  return (
    <div className="hero-section bg-[#0f1624] text-white min-h-[80vh] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-blob1 z-0"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-blob2 z-0"></div>
      <div className="absolute top-[40%] left-[-80px] w-[200px] h-[200px] bg-pink-500 opacity-20 rounded-full filter blur-2xl animate-blob3 z-0"></div>
      {/* End Animated Background */}

      <div className="text-center mb-8 z-3">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-blue-400">Shashi</span>.
        </h1>
        <div className="text-2xl md:text-3xl flex items-center justify-center">
          <span className="mr-2">A</span>
          <TypeAnimation
            sequence={[
              'Creative',
              1000,
              'Web Developer',
              1000,
              'Fullstack Developer',
              1000,
              'UI/UX Designer',
              1000,
              'Introvert',
              1000
            ]}
            wrapper="span"
            speed={50}
            className="text-blue-400"
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="flex space-x-4 mt-8 z-3">
        <Link 
          to="/projects" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all"
        >
          Projects
        </Link>
        {/* <Link 
          to="/contact" 
          className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-lg transition-all"
        >
          Hire Me
        </Link> */}
        <Link
          to="/about"
          className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg transition-all"
        >
          About Me
        </Link>
      </div>
      
    </div>
  );
};

export default HeroSection;


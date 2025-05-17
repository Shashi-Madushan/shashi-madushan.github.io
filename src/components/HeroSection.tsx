import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section bg-[#0f1624]  text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-center mb-8">
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

      <div className="flex space-x-4 mt-8">
        <a 
          href="#projects" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-lg transition-all"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
// src/components/Navbar.js
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex rounded-xl px-8 py-4 bg-[#0f1624] text-white shadow border border-[#2a3249]">
        <div className="space-x-6 flex items-center">
          <Link
            to="/"
            className="font-bold text-blue-200 hover:text-blue-400 transition-colors text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold text-blue-200 hover:text-blue-400 transition-colors text-lg"
          >
            About me
          </Link>
          <Link
            to="/education"
            className="font-bold text-blue-200 hover:text-blue-400 transition-colors text-lg"
          >
            Education
          </Link>
          <Link
            to="/projects"
            className="font-bold text-blue-200 hover:text-blue-400 transition-colors text-lg"
          >
            Projects
          </Link>
        </div>
      </nav>
      
      {/* Mobile & Tablet Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-3 left-3 right-3 bg-[#0f1624] text-white shadow border border-[#2a3249] rounded-2xl z-20">
        <div className="flex justify-around items-center py-3">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive('/') ? 'text-blue-400 bg-[#18213a]' : 'text-blue-200 hover:text-blue-400'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs">Home</span>
          </Link>
          
          <Link
            to="/about"
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive('/about') ? 'text-blue-400 bg-[#18213a]' : 'text-blue-200 hover:text-blue-400'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">About</span>
          </Link>
          
          <Link
            to="/education"
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive('/education') ? 'text-blue-400 bg-[#18213a]' : 'text-blue-200 hover:text-blue-400'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs">Education</span>
          </Link>
          
          <Link
            to="/projects"
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive('/projects') ? 'text-blue-400 bg-[#18213a]' : 'text-blue-200 hover:text-blue-400'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs">Projects</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

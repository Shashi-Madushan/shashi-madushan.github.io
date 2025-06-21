// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex rounded-xl px-8 py-4 bg-[#0f1624] text-white shadow border border-[#2a3249]">
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
);

export default Navbar;

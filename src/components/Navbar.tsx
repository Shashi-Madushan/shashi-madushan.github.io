// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex rounded-lg  px-8 py-4 bg-gray  text-white">
    <div className="space-x-6">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/about" className="hover:text-blue-400">About me</Link>
      <Link to="/projects" className="hover:text-blue-400">Projects</Link>
      <Link to="/blogs" className="hover:text-blue-400">Blogs</Link>
    </div>
  </nav>
);

export default Navbar;

// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-800 overflow-hidden">
        <div className="fixed h-full z-10">
          <Sidebar />
        </div>

        <div className="fixed top-3 right-3  border-b border-gray-800  z-10 rounded-b-lg p-1">
          <Navbar />
        </div>
        <div className="flex-1 m-3 ml-70  relative  h-screen overflow-y-auto rounded-xl text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;

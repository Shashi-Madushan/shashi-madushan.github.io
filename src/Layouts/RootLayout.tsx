import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const RootLayout = () => {
    return (
        <div className="bg-gray-800 min-h-screen">
            {/* Desktop Layout */}
            <div className="hidden lg:flex overflow-hidden">
                <div className="fixed h-full z-10">
                    <Sidebar/>
                </div>

                <div className="fixed top-3 right-3 border-b border-gray-800 z-10 rounded-b-lg p-1">
                    <Navbar />
                </div>
                
                <div className="flex-1 m-3 ml-72 relative h-screen overflow-y-auto rounded-xl text-white">
                    <Outlet/>
                </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:flex lg:hidden flex-col min-h-screen">
                {/* Top Sidebar */}
                <div className="sticky top-0 z-10">
                    <Sidebar/>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 m-3 mb-20 relative overflow-y-auto rounded-xl text-white">
                    <Outlet/>
                </div>
                
                {/* Bottom Navigation */}
                <Navbar />
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col min-h-screen">
                {/* Top Sidebar */}
                <div className="sticky top-0 z-10">
                    <Sidebar/>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 m-3 mb-20 relative overflow-y-auto rounded-xl text-white">
                    <Outlet/>
                </div>
                
                {/* Bottom Navigation */}
                <Navbar />
            </div>
        </div>
    )
}

export default RootLayout
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const RootLayout = () => {
    return (
        <div className="flex bg-gray-800 overflow-hidden">
            <div className="fixed h-full z-10">
                <Sidebar/>
            </div>

            <div className="fixed top-3 right-3  border-b border-gray-800  z-10 rounded-b-lg p-1">
                <Navbar />
            </div>
            <div className="flex-1 m-3 ml-70   relative  h-screen overflow-y-auto rounded-xl text-white">
                <Outlet/>
            </div>
        </div>
    )
}

export default RootLayout
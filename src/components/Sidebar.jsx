import { MdDashboard, MdErrorOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineCustomerService } from "react-icons/ai";
import { BiErrorCircle, BiSolidErrorAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

    // Helper untuk styling link aktif
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all duration-200
        ${isActive ? 
            "text-biru bg-blue-100 font-extrabold shadow-sm" : 
            "text-gray-600 hover:text-biru hover:bg-blue-50 hover:font-extrabold"
        }`;

    return (
        <div id="sidebar" className="flex min-h-screen w-80 flex-col bg-white p-8 shadow-2xl border-r border-gray-100">
            
            {/* Logo Section */}
            <div id="sidebar-logo" className="flex flex-col mb-10">
                <span id="logo-title" className="font-poppins text-[40px] leading-tight text-gray-900">
                    Sedap<b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Modern Admin Dashboard
                </span>
            </div>

            {/* Main Navigation Menu */}
            <div id="sidebar-menu" className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 block">Main Menu</span>
                <ul id="menu-list" className="space-y-2">
                   <li>
                        <NavLink id="menu-dashboard" to="/" className={menuClass}>
                            <MdDashboard className="text-xl" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-orders" to="/orders" className={menuClass}>
                            <CiShoppingCart className="text-xl font-bold" />
                            <span>Orders</span>
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink id="menu-customers" to="/customers" className={menuClass}>
                            <AiOutlineCustomerService className="text-xl" />
                            <span>Customers</span>
                        </NavLink>
                    </li>
                </ul>

                {/* ERROR TESTING MENU (Tugas Baru) */}
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-10 mb-4 block">
                    Error Handling Test
                </span>
                <ul id="error-menu-list" className="space-y-2">
                    <li>
                        <NavLink id="menu-error-400" to="/error-400" className={menuClass}>
                            <MdErrorOutline className="text-xl" />
                            <span>Error 400 (Bad)</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-error-401" to="/error-401" className={menuClass}>
                            <BiErrorCircle className="text-xl" />
                            <span>Error 401 (Auth)</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-error-403" to="/error-403" className={menuClass}>
                            <BiSolidErrorAlt className="text-xl" />
                            <span>Error 403 (Forbidden)</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Footer Section */}
            <div id="sidebar-footer" className="mt-10 pt-6 border-t border-gray-100">
                <div id="footer-card" className="bg-hijau p-4 rounded-2xl shadow-lg shadow-green-100 mb-8 flex flex-col items-center relative overflow-hidden">
                    {/* Background Aksesori */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                    
                    <div className="flex items-center gap-3 w-full mb-4">
                        <img id="footer-avatar" className="w-10 h-10 rounded-xl border-2 border-white/50 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIe3VuOA6oMIqC9QIR6mkvfG9stciQXtOZ4A&s" alt="Admin" />
                        <div className="text-white">
                            <p className="text-[10px] font-medium opacity-80">Organize your food menus</p>
                            <p className="text-sm font-bold">Quick Setup</p>
                        </div>
                    </div>

                    <button id="add-menu-button" className="w-full flex justify-center items-center py-2.5 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-xl transition-all active:scale-95 space-x-2">
                        <FaPlus className="text-xs" />
                        <span className="text-xs font-bold">Add New Menus</span>
                    </button>
                </div>

                <div className="px-2">
                    <span id="footer-brand" className="text-[11px] font-bold text-gray-800 block">Sedap Restaurant Admin</span>
                    <p id="footer-copyright" className="text-[10px] font-medium text-gray-400 mt-1">&copy; 2025 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}
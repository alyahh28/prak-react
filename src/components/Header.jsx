import { useState } from "react";
import { FaBell, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`flex justify-between items-center p-4 transition-colors ${isDark ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'}`}>
            {/* IMPROVISASI 1: Search Bar with Modal Trigger */}
            <div className="relative w-full max-w-lg">
                <input
                    onClick={() => setIsSearchOpen(true)}
                    className="border border-gray-200 p-2 pr-10 bg-gray-50 w-full rounded-md outline-none focus:ring-2 focus:ring-green-400"
                    type="text"
                    placeholder="Click to search..."
                    readOnly
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Modal Search Pop-up */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-xl animate-in fade-in slide-in-from-top-4">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-bold text-lg text-gray-800">Quick Search</h3>
                            <button onClick={() => setIsSearchOpen(false)} className="text-red-500 font-bold text-xl">✕</button>
                        </div>
                        <input autoFocus className="w-full p-3 border-b-2 border-green-500 outline-none text-gray-700" placeholder="Type framework or menu name..." />
                        <div className="mt-4 text-sm text-gray-400">Suggestions: Dashboard, Orders, Settings...</div>
                    </div>
                </div>
            )}

            <div className="flex items-center space-x-4">
                {/* IMPROVISASI 3: Dark Mode Toggle */}
                <button 
                    onClick={() => setIsDark(!isDark)}
                    className={`p-3 rounded-2xl transition-all ${isDark ? 'bg-yellow-400 text-slate-900' : 'bg-slate-100 text-slate-600'}`}
                >
                    {isDark ? <FaSun /> : <FaMoon />}
                </button>

                <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                    <FaBell />
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-2 py-0.5 text-[10px]">50</span>
                </div>
                
                <div className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                    <span className="hidden md:block">Hello, <b>Alyah</b></span>
                    <img src="https://www.shutterstock.com/image-photo/colorful-sunset-sky-calm-waves-600nw-2623355457.jpg" className="w-10 h-10 rounded-full border-2 border-green-500" />
                </div>
            </div>
        </div>
    );
}   
import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    const [selectedStat, setSelectedStat] = useState(null);

    const stats = [
        { id: 'orders', title: 'Total Orders', value: '75', icon: <FaShoppingCart />, color: 'bg-green-500', details: '70 Successful, 5 Pending' },
        { id: 'delivered', title: 'Total Delivered', value: '175', icon: <FaTruck />, color: 'bg-green-500', details: 'All items reached customers' },
        { id: 'canceled', title: 'Total Canceled', value: '40', icon: <FaBan />, color: 'bg-red-500', details: 'Canceled by customer' },
        { id: 'revenue', title: 'Total Revenue', value: 'Rp.128M', icon: <FaDollarSign />, color: 'bg-blue-500', details: 'Increased 15% from last month' },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PageHeader />
            
            {/* Grid Stats */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {stats.map((stat) => (
                    <div 
                        key={stat.id}
                        onClick={() => setSelectedStat(stat)}
                        className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm p-6 cursor-pointer hover:shadow-xl 
                        hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-green-200"
                    >
                        <div className={`${stat.color} rounded-2xl p-4 text-white text-3xl shadow-lg`}>
                            {stat.icon}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold text-gray-800">{stat.value}</span>
                            <span className="text-gray-400 text-sm font-medium">{stat.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* IMPROVISASI 2: Modal Detail Statistik */}
            {selectedStat && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl scale-up-center">
                        <div className={`${selectedStat.color} w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4`}>
                            {selectedStat.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">{selectedStat.title}</h2>
                        <p className="text-4xl font-black text-gray-900 my-2">{selectedStat.value}</p>
                        <p className="text-gray-500 mb-6">{selectedStat.details}</p>
                        <button 
                            onClick={() => setSelectedStat(null)}
                            className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-700 transition"
                        >
                            Close Detail
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    const stats = [
        { label: "Total Orders", value: "1,240", icon: <FaShoppingCart />, color: "text-blue-600", bg: "bg-blue-100" },
        { label: "On Delivery", value: "12", icon: <FaTruck />, color: "text-orange-600", bg: "bg-orange-100" },
        { label: "Cancelled", value: "5", icon: <FaBan />, color: "text-red-600", bg: "bg-red-100" },
        { label: "Revenue", value: "$12.4K", icon: <FaDollarSign />, color: "text-green-600", bg: "bg-green-100" },
    ];

    const [orderData] = useState([
        { id: "#ORD-001", customer: "Ahmad Fauzi", item: "Nasi Goreng Spesial", total: "Rp 25.000", status: "Delivered" },
        { id: "#ORD-002", customer: "Siti Aminah", item: "Ayam Bakar Madu", total: "Rp 35.000", status: "Processing" },
        { id: "#ORD-003", customer: "Budi Santoso", item: "Es Teh Manis", total: "Rp 5.000", status: "Cancelled" },
        { id: "#ORD-004", customer: "Rina Wijaya", item: "Sate Padang", total: "Rp 30.000", status: "Delivered" },
        { id: "#ORD-005", customer: "Andi Pratama", item: "Mie Goreng Jawa", total: "Rp 22.000", status: "Processing" },
        { id: "#ORD-006", customer: "Dewi Lestari", item: "Gado-Gado", total: "Rp 18.000", status: "Delivered" },
        { id: "#ORD-007", customer: "Fajar Nugraha", item: "Bakso Sapi", total: "Rp 20.000", status: "Delivered" },
        { id: "#ORD-008", customer: "Gita Permata", item: "Soto Ayam", total: "Rp 15.000", status: "Cancelled" },
        { id: "#ORD-009", customer: "Hendra Wijaya", item: "Nasi Uduk", total: "Rp 12.000", status: "Delivered" },
        { id: "#ORD-010", customer: "Indah Sari", item: "Penyet Ayam", total: "Rp 28.000", status: "Processing" },
        { id: "#ORD-011", customer: "Joko Susilo", item: "Capcay Seafood", total: "Rp 32.000", status: "Delivered" },
        { id: "#ORD-012", customer: "Kartika Putri", item: "Kwetiau Goreng", total: "Rp 24.000", status: "Cancelled" },
        { id: "#ORD-013", customer: "Lutfi Hakim", item: "Nasi Kuning", total: "Rp 15.000", status: "Delivered" },
        { id: "#ORD-014", customer: "Maya Sofia", item: "Pempek Kapal Selam", total: "Rp 25.000", status: "Processing" },
        { id: "#ORD-015", customer: "Nugroho Adi", item: "Martabak Telur", total: "Rp 40.000", status: "Delivered" },
        { id: "#ORD-016", customer: "Oki Setiawan", item: "Terang Bulan", total: "Rp 35.000", status: "Delivered" },
        { id: "#ORD-017", customer: "Putri Utami", item: "Soto Betawi", total: "Rp 38.000", status: "Cancelled" },
        { id: "#ORD-018", customer: "Qori Ananda", item: "Lontong Sayur", total: "Rp 15.000", status: "Delivered" },
        { id: "#ORD-019", customer: "Rizky Ramadhan", item: "Bubur Ayam", total: "Rp 12.000", status: "Processing" },
        { id: "#ORD-020", customer: "Siska Amelia", item: "Nasi Liwet", total: "Rp 30.000", status: "Delivered" },
        { id: "#ORD-021", customer: "Taufik Hidayat", item: "Ayam Kremes", total: "Rp 26.000", status: "Delivered" },
        { id: "#ORD-022", customer: "Ulfa Maria", item: "Sayur Asem", total: "Rp 10.000", status: "Cancelled" },
        { id: "#ORD-023", customer: "Vina Pandu", item: "Pepes Ikan", total: "Rp 35.000", status: "Delivered" },
        { id: "#ORD-024", customer: "Wahyu Setia", item: "Ikan Bakar", total: "Rp 45.000", status: "Processing" },
        { id: "#ORD-025", customer: "Xena Putri", item: "Rendang Sapi", total: "Rp 50.000", status: "Delivered" },
        { id: "#ORD-026", customer: "Yudi Guntara", item: "Dendeng Balado", total: "Rp 48.000", status: "Delivered" },
        { id: "#ORD-027", customer: "Zahra Azizah", item: "Opor Ayam", total: "Rp 30.000", status: "Cancelled" },
        { id: "#ORD-028", customer: "Baim Wong", item: "Sop Buntut", total: "Rp 65.000", status: "Delivered" },
        { id: "#ORD-029", customer: "Cinta Laura", item: "Salad Buah", total: "Rp 25.000", status: "Processing" },
        { id: "#ORD-030", customer: "Desta Mahendra", item: "Kopi Susu", total: "Rp 18.000", status: "Delivered" },
    ]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PageHeader title="Orders" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                {stats.map((item, index) => (
                    <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.bg} ${item.color}`}>
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase">{item.label}</p>
                            <p className="text-xl font-black text-gray-800">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Order ID</th>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Customer</th>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Menu Item</th>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Total</th>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {orderData.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition">
                                    <td className="p-4 font-bold text-blue-600 text-sm">{order.id}</td>
                                    <td className="p-4 text-sm font-medium text-gray-800">{order.customer}</td>
                                    <td className="p-4 text-sm text-gray-600">{order.item}</td>
                                    <td className="p-4 text-sm font-bold text-gray-900">{order.total}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${
                                            order.status === "Delivered" ? "bg-green-100 text-green-600" : 
                                            order.status === "Processing" ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
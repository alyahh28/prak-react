import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    const [customerList] = useState([
        { id: 1, name: "Ahmad Fauzi", email: "ahmad.f@gmail.com", phone: "08123456789", status: "Active" },
        { id: 2, name: "Siti Aminah", email: "siti.aminah@yahoo.com", phone: "08527711223", status: "Active" },
        { id: 3, name: "Budi Santoso", email: "budi.san@hotmail.com", phone: "08139988776", status: "Inactive" },
        { id: 4, name: "Rina Wijaya", email: "rina.w@gmail.com", phone: "08126655443", status: "Active" },
        { id: 5, name: "Andi Pratama", email: "andi.p@outlook.com", phone: "08210099887", status: "Inactive" },
        { id: 6, name: "Dewi Lestari", email: "dewi.les@gmail.com", phone: "08112233445", status: "Active" },
        { id: 7, name: "Fajar Nugraha", email: "fajar.nug@yahoo.com", phone: "08556677889", status: "Active" },
        { id: 8, name: "Gita Permata", email: "gita.per@gmail.com", phone: "08199887766", status: "Inactive" },
        { id: 9, name: "Hendra Wijaya", email: "hendra.w@gmail.com", phone: "08122334455", status: "Active" },
        { id: 10, name: "Indah Sari", email: "indah.sari@yahoo.com", phone: "08533445566", status: "Active" },
        { id: 11, name: "Joko Susilo", email: "joko.sus@gmail.com", phone: "08133445566", status: "Active" },
        { id: 12, name: "Kartika Putri", email: "kartika.p@gmail.com", phone: "08144556677", status: "Inactive" },
        { id: 13, name: "Lutfi Hakim", email: "lutfi.h@yahoo.com", phone: "08566778899", status: "Active" },
        { id: 14, name: "Maya Sofia", email: "maya.sof@gmail.com", phone: "08177889900", status: "Active" },
        { id: 15, name: "Nugroho Adi", email: "nugroho.a@gmail.com", phone: "08188990011", status: "Inactive" },
        { id: 16, name: "Oki Setiawan", email: "oki.set@yahoo.com", phone: "08599001122", status: "Active" },
        { id: 17, name: "Putri Utami", email: "putri.u@gmail.com", phone: "08111223344", status: "Active" },
        { id: 18, name: "Qori Ananda", email: "qori.a@gmail.com", phone: "08122334455", status: "Inactive" },
        { id: 19, name: "Rizky Ramadhan", email: "rizky.r@yahoo.com", phone: "08533445566", status: "Active" },
        { id: 20, name: "Siska Amelia", email: "siska.a@gmail.com", phone: "08144556677", status: "Active" },
        { id: 21, name: "Taufik Hidayat", email: "taufik.h@gmail.com", phone: "08155667788", status: "Active" },
        { id: 22, name: "Ulfa Maria", email: "ulfa.m@yahoo.com", phone: "08566778899", status: "Inactive" },
        { id: 23, name: "Vina Pandu", email: "vina.p@gmail.com", phone: "08177889900", status: "Active" },
        { id: 24, name: "Wahyu Setia", email: "wahyu.s@gmail.com", phone: "08188990011", status: "Active" },
        { id: 25, name: "Xena Putri", email: "xena.p@yahoo.com", phone: "08599001122", status: "Inactive" },
        { id: 26, name: "Yudi Guntara", email: "yudi.g@gmail.com", phone: "08111223344", status: "Active" },
        { id: 27, name: "Zahra Azizah", email: "zahra.a@gmail.com", phone: "08122334455", status: "Active" },
        { id: 28, name: "Baim Wong", email: "baim.w@yahoo.com", phone: "08533445566", status: "Active" },
        { id: 29, name: "Cinta Laura", email: "cinta.l@gmail.com", phone: "08144556677", status: "Inactive" },
        { id: 30, name: "Desta Mahendra", email: "desta.m@gmail.com", phone: "08155667788", status: "Active" },
    ]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PageHeader title="Customers" />
            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="p-4 font-semibold">User</th>
                                <th className="p-4 font-semibold">Phone Number</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {customerList.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition">
                                    <td className="p-4 flex items-center gap-3">
                                        <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} className="w-10 h-10 rounded-full" alt="avatar" />
                                        <div>
                                            <p className="font-bold text-gray-800 text-sm">{user.name}</p>
                                            <p className="text-xs text-gray-400">{user.email}</p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">{user.phone}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                            user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                                        }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <button className="text-blue-500 hover:underline text-xs font-bold">Edit</button>
                                        <span className="mx-2 text-gray-300">|</span>
                                        <button className="text-red-500 hover:underline text-xs font-bold">Delete</button>
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
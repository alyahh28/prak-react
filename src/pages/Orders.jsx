import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    return (
           <div className="p-6 bg-gray-50 min-h-screen">
               <PageHeader />
               <p>Ini Halaman Orders</p>
           </div>
    );
}
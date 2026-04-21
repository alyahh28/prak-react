import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PageHeader title="Customer" />
            <p>Ini Halaman Customer</p>
        </div>
    );
}
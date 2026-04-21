import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { Link } from 'react-router-dom';
import React from 'react';

export default function NotFound() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen flex flex-col">
            {/* Header tetap konsisten dengan layout dashboard */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Page 404</h1>
                <nav className="text-sm text-gray-500">
                    Dashboard / <span className="text-gray-400">Error</span>
                </nav>
            </div>

            {/* Konten Utama Error */}
            <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                {/* Ikon Visual */}
                <div className="bg-red-50 p-6 rounded-full mb-6">
                    <svg 
                        className="w-20 h-20 text-blue-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                        />
                    </svg>
                </div>

                <h2 className="text-4xl font-extrabold text-gray-900 mb-2">404</h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    HALAMAN TIDAK DITEMUKAN
                </h3>
                <p className="text-gray-500 max-w-md mb-8">
                    Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. 
                    Silakan kembali ke dashboard utama.
                </p>

                {/* Tombol yang senada dengan 'Add Button' di gambar */}
                <Link 
                    to="/" 
                    className="bg-[#00B074] hover:bg-[#009663] text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg shadow-green-100 flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Kembali ke Dashboard
                </Link>
            </div>
        </div>
    );
}
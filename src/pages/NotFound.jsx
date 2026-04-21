import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaQuestionCircle } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="p-6 bg-[#F3F4F8] min-h-screen flex flex-col font-sans relative overflow-hidden">
            
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#00B074] opacity-[0.03] rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500 opacity-[0.03] rounded-full blur-3xl"></div>

            {/* Header / Breadcrumb */}
            <div className="relative z-10 mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-gray-800 tracking-tight">404 Error</h1>
                    <div className="flex items-center gap-2 text-sm font-semibold mt-1">
                        <span className="text-gray-400">Application</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-[#00B074]">Lost in Space</span>
                    </div>
                </div>
                <div className="hidden md:block text-right">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">System Status</span>
                    <p className="text-sm font-bold text-red-500">Page Not Found</p>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center bg-white/70 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-12 text-center">
                
                {/* Visual Illustration */}
                <div className="relative mb-12">
                    {/* Animated Glow */}
                    <div className="absolute inset-0 bg-[#00B074] blur-[60px] opacity-10 animate-pulse"></div>
                    
                    <div className="relative flex items-center justify-center animate-bounce-slow">
                        <span className="text-[12rem] font-black leading-none tracking-tighter text-gray-900 opacity-[0.04] absolute">
                            404
                        </span>
                        <div className="relative z-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-50">
                            <svg className="w-24 h-24 text-[#00B074]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content Text */}
                <div className="max-w-md">
                    <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        Waduh! Kamu Nyasar?
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                        Halaman yang kamu tuju tidak ada di radar kami. <br/>
                        Mungkin sedang dalam perbaikan atau pindah alamat.
                    </p>

                    {/* Button Group */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            to="/" 
                            className="w-full sm:w-auto group bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
                        >
                            <FaHome className="group-hover:rotate-12 transition-transform" />
                            Back to Home
                        </Link>
                        
                        <Link 
                            to="/support" 
                            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-2xl font-bold border-2 border-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm"
                        >
                            <FaQuestionCircle className="text-[#00B074]" />
                            Hubungi CS
                        </Link>
                    </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="mt-16 pt-8 border-t border-gray-100 w-full max-w-lg">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Mungkin ini yang kamu cari:</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/products" className="text-sm font-bold text-gray-600 hover:text-[#00B074] transition-colors">Produk</Link>
                        <Link to="/orders" className="text-sm font-bold text-gray-600 hover:text-[#00B074] transition-colors">Pesanan Saya</Link>
                        <Link to="/settings" className="text-sm font-bold text-gray-600 hover:text-[#00B074] transition-colors">Pengaturan</Link>
                    </div>
                </div>
            </div>

            {/* Tailwind Custom Animation in Style tag or Tailwind Config */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}} />
        </div>
    );
}
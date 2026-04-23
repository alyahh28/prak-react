import React from 'react';

export default function EventHandler() {
  // Fungsi Handling Event Klik
  const handleTampilkanPesan = () => {
    alert("Tombol telah diklik! Event Handling berhasil dijalankan.");
  };

  // Fungsi Handling Event Mouse Over (Improvisasi)
  const handleMouseOver = () => {
    console.log("Mouse berada di atas teks!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
      <h2 className="text-xl font-bold text-slate-800 mb-4">
        Latihan Handling Event
      </h2>
      
      <p 
        onMouseOver={handleMouseOver}
        className="text-slate-500 mb-6 text-center cursor-help"
      >
        Arahkan mouse ke sini atau klik tombol di bawah untuk mencoba event.
      </p>

      {/* onClick adalah contoh Handling Event utama di React */}
      <button
        onClick={handleTampilkanPesan}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-100"
      >
        Klik Saya!
      </button>

      <div className="mt-6 text-[10px] text-slate-400 font-mono uppercase tracking-widest">
        File: EventHandler.jsx
      </div>
    </div>
  );
}
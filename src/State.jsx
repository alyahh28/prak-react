import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  // Improvisasi 1 & 2: Fungsi dengan Validasi & Reset
  const tambah = () => {
    if (count < 10) setCount(count + 1);
    else alert("Batas maksimal angka adalah 10!");
  };

  const kurang = () => {
    if (count > 0) setCount(count - 1);
    else alert("Angka tidak bisa negatif!");
  };

  const reset = () => setCount(0);

  // --- GLITCH EFFECT CSS (Inline Keyframes) ---
  // Kita masukkan CSS di sini agar tidak perlu file CSS tambahan
  const glitchStyles = `
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-5px, 5px); }
      40% { transform: translate(-5px, -5px); }
      60% { transform: translate(5px, 5px); }
      80% { transform: translate(5px, -5px); }
      100% { transform: translate(0); }
    }
    @keyframes glitch-skew {
      0% { transform: skew(0deg); }
      10% { transform: skew(3deg); opacity: 0.7; }
      20% { transform: skew(-3deg); opacity: 1; }
      30% { transform: skew(1deg); opacity: 0.8; }
      40% { transform: skew(-1deg); opacity: 1; }
      50% { transform: skew(0deg); }
      100% { transform: skew(0deg); }
    }
    .glitch-text {
      position: relative;
      animation: glitch 1s infinite linear alternate-reverse;
    }
    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    .glitch-text::before {
      color: #0ff; /* Warna Cyan untuk efek glitch */
      animation: glitch 0.4s infinite linear alternate-reverse;
      z-index: -1;
    }
    .glitch-text::after {
      color: #f0f; /* Warna Magenta untuk efek glitch */
      animation: glitch 0.4s infinite linear alternate-reverse;
      z-index: -2;
    }
    .glitch-container {
      animation: glitch-skew 4s infinite linear;
    }
  `;

  // Improvisasi 3: Dinamik Warna (ala desain glitch)
  const isErrorMax = count === 10;
  const errorColor = isErrorMax ? "text-red-500" : "text-white";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] p-6 font-mono text-white overflow-hidden">
      
      {/* Memasukkan CSS Keyframes langsung ke dalam dokumen */}
      <style>{glitchStyles}</style>

      {/* Container Glitch & Ilustrasi (Sesuai Figma) */}
      <div className="flex flex-col items-center gap-6 mb-12 w-full max-w-lg glitch-container">
        
        {/* Angka Error Dinamis dengan Glitch Effect */}
        <div className="relative">
          <h1 
            className={`text-[120px] font-black leading-none tracking-tighter ${errorColor} transition-colors duration-300 glitch-text`}
            data-text={`4${count}4`} // Data attribute untuk efek glitch
          >
            4{count}4
          </h1>
        </div>

        {/* Ilustrasi Karakter (Sesuai Konsep Figma) */}
        {/* <img 
          src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-page-5111166-4271891.png" 
          alt="404 Glitch Illustration" 
          className="w-full h-auto object-contain opacity-90 scale-up-center"
        /> */}

        {/* Teks Pesan Error */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3 tracking-wide">
            SYSTEM_ERROR: PAGE_NOT_FOUND
          </h2>
          <p className="text-gray-400 max-w-xs mx-auto leading-relaxed text-sm">
            Tersesat di dunia siber? Coba ubah angka di atas atau gunakan tombol navigasi di bawah.
          </p>
        </div>
      </div>

      {/* Kontrol State (Event Handling) */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-6 bg-[#1A1A1A] p-4 rounded-3xl border border-[#333] shadow-inner-dark">
          <button 
            onClick={kurang} 
            className="w-14 h-14 flex items-center justify-center bg-[#2A2A2A] text-gray-400 rounded-2xl text-2xl font-bold hover:bg-[#333] hover:text-white active:scale-90 transition-all border border-[#444]"
          >
            -
          </button>
          
          <span className={`text-4xl font-black ${errorColor} w-12 text-center transition-colors duration-300`}>
            {count}
          </span>
          
          <button 
            onClick={tambah} 
            className="w-14 h-14 flex items-center justify-center bg-indigo-600 text-white rounded-2xl text-2xl font-bold hover:bg-indigo-700 active:scale-90 transition-all shadow-lg shadow-indigo-900 border border-indigo-500"
          >
            +
          </button>
        </div>

        {/* Tombol Back to Home / Reset (Sesuai Gaya Figma) */}
        <button 
          onClick={reset}
          className="px-12 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/10"
        >
          Back to Terminal
        </button>
      </div>

      {/* Log Tambahan untuk Improvisasi */}
      <div className="mt-12 text-[10px] text-gray-700 font-black uppercase tracking-[0.2em]">
        Error Log: [{count === 10 ? "CRITICAL" : "OK"}] / Custom_State::{count} / Per:6
      </div>
    </div>
  );
}
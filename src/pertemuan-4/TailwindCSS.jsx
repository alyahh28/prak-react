export default function TailwindCSS() {
    return (
        <div>
            <FlexboxGrid/>
            <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-blue-500 text-white px-4 py-2 mx-4 
                    rounded shadow-lg">Click Me</button>
                    <Spacing title="Card Title" content="Ini adalah contoh penggunaan padding dan margin di Tailwind."/>
                    <Typography/> 
                    <BorderRadius/>  
                    <BackgroundColors/>
                    <ShadowEffects/>
                    <TailwindShowcase/>                    
        </div>
    );
}

function Spacing(props){
    return (
        <div className="bg-gray-500 shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-extrabold">{props.title}</h2>
            <p className="mt-2 text-white">{props.content}</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="ml-4 ">
            <h1 className="text-5xl font-bold text-blue-900">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className=" m-4 border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="m-4 bg-green-800 text-white p-6 rounded-lg hover:bg-green-600">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg font-bold">Login</h1>    
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}


function TailwindShowcase() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* 1. Flexbox & Background (Navigasi Kecil) */}
      <nav className="flex justify-between items-center bg-gray-800 p-4 text-white rounded-t-lg shadow-md">
        <h1 className="text-xl font-bold tracking-tight">TailwindLab</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Explore</li>
          <li className="hover:text-blue-400 cursor-pointer">Learning</li>
        </ul>
      </nav>

      {/* 2. Main Container (Spacing & Shadow) */}
      <div className="bg-white shadow-lg p-8 rounded-b-lg border-t-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300">
        
        {/* 3. Typography Section */}
        <header className="mb-6">
          <h2 className="text-4xl font-extrabold text-blue-900 leading-tight">
            Mastering Modern CSS
          </h2>
          <p className="text-gray-600 text-lg mt-2 italic">
            "Belajar Tailwind sangat menyenangkan dan cepat!"
          </p>
        </header>

        {/* 4. Grid/Flex Content & Background Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-800 text-white p-6 rounded-2xl hover:bg-green-700 transition">
            <h3 className="text-lg font-bold mb-2">Tailwind Colors</h3>
            <p className="text-sm opacity-90">
              Menggunakan utility classes untuk warna membuat desain jauh lebih konsisten.
            </p>
          </div>

          <div className="bg-gray-500 text-white p-6 rounded-2xl shadow-inner">
            <h3 className="text-lg font-bold mb-2">Spacing & Padding</h3>
            <p className="text-sm opacity-90">
              Margin (m-4) dan Padding (p-6) memberikan ruang bernapas pada elemen kita.
            </p>
          </div>
        </div>

        {/* 5. BorderRadius & Interactive Button */}
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
            Mulai Petualangan!
          </button>
        </div>
      </div>
    </div>
  );
}
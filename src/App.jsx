import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/tailwind.css"
import Sidebar from './layouts/Sidebar'
import Header from './layouts/Header'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            
            <Route path="/error-400" element={
    <NotFound 
      code="400" 
      title="Bad Request"
      description="Server tidak dapat memproses permintaan Anda karena formatnya salah."
    />
  } />

  <Route path="/error-401" element={
    <NotFound 
      code="401" 
      title="Unauthorized"
      description="Waduh, sepertinya Anda belum login atau tidak punya akses ke sini."
         />
  } />

  <Route path="/error-403" element={
    <NotFound 
      code="403" 
      title="Access Forbidden"
      description="Maaf ya, area ini terlarang untuk akun Anda. Silakan hubungi admin."
    />
  } />

  {/* Page Not Found (404) */}
  <Route path="*" element={
    <NotFound 
      code="404" 
      title="Lost in Space"
      description="Halaman yang kamu cari tidak ada di radar kami. Mungkin sedang dalam perbaikan."
      
    />
  } />
          </Routes>

        </div>
      </div>
    </div>
  );
}



export default App

import React, { useState, lazy, Suspense } from 'react' // Tambahkan lazy & Suspense
import "./assets/tailwind.css"
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'

// Ganti import statis menjadi lazy loading
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Orders = React.lazy(() => import('./pages/Orders'))
const Customers = React.lazy(() => import('./pages/Customers'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Login = React.lazy(() => import('./pages/auth/Login'))
const Register = React.lazy(() => import('./pages/auth/Register'))
const Forgot = React.lazy(() => import('./pages/auth/Forgot'))



// MainLayout & AuthLayout biasanya dibiarkan statis karena sering langsung dipakai
const MainLayout = React.lazy(() => import('./layouts/MainLayout'))
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout'))

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<MainLayout />}>
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
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
    </Routes>
    </Suspense>
  );
}



export default App

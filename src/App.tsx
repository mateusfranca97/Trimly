import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Register from "./pages/Auth/Register";
import Booking from "./pages/Booking/Booking";
import MyAppointments from "./pages/Booking/MyAppointments";
import AdminDashboard from "./pages/Admin/Dashboard";
import Home from './pages/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

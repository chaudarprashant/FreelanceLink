import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceProviderForm from './pages/Admin/ServiceProviderForm';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ServiceProvidersList from './pages/ServiceProvidersList';
import ContactSP from './pages/ContactSP';
import Home from './Home';
import NewWorks from './pages/Admin/NewWork';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<HomePage/>} />
     <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/service" element={<ServiceProviderForm/>} />
    <Route path="/admin" element={<AdminDashboard/>} />
    <Route path="/service-providers/:category" element={<ServiceProvidersList />} />
    <Route path="/service-provider/:id" element={<ContactSP/>} />
    <Route path="/service-provider/new-work" element={<NewWorks />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App

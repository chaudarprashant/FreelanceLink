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
  const backgroundStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #ffffff, #96d2f0)",
        zIndex: 0,
        overflow: "hidden",
    };

    const overlayStyle = {
        position: "fixed",
        inset: 0,
        background: "radial-gradient(circle at top left, rgba(0, 123, 255, 0.08), transparent), radial-gradient(circle at bottom right, rgba(0, 191, 255, 0.08), transparent)",
        zIndex: 0,
        pointerEvents: "none"
    };

    const contentWrapperStyle = {
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
    };

  return (
    <BrowserRouter>
      <div style={backgroundStyle}></div>
            <div style={overlayStyle}></div>
            <div style={contentWrapperStyle}>
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
      </div>
    </BrowserRouter>
  )
}

export default App

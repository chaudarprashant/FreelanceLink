import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check auth state
  const checkLoginStatus = () => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  };

  useEffect(() => {
    checkLoginStatus(); // on mount

    // Listen to custom auth change events
    window.addEventListener('authChanged', checkLoginStatus);

    return () => {
      window.removeEventListener('authChanged', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');

    // Trigger custom event to update nav state
    window.dispatchEvent(new Event('authChanged'));

    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand pl-8 ms-5" to="/">FreelanceLink</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-evenly w-50">
            <li className="nav-item">
              <NavLink className="nav-link hover-effect" exact="true" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-effect" to="/about">About</NavLink>
            </li>

            {!isLoggedIn ? (
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle hover-effect"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Register
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item hover-effect" to="/signup">SignUp</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item hover-effect" to="/login">Login</NavLink>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              </li>
            )}

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

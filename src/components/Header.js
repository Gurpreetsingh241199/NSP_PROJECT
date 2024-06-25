import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        National Scholarship Portal
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <div
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="#login" className="dropbtn">
            Login <span className="arrow">&#9660;</span>
          </a>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#student-login">Student Login</a>
              <a href="#institute-login">Institute Login</a>
              <a href="#government-login">Government Login</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

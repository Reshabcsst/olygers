import React from 'react';
import logo from '../Assets/logo.png';
import '../App.css';

const Header = () => {
  return (
    <header>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li>
            <a href="#">Services ▼</a>
            {/* Dropdown menu items would go here */}
          </li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Enquiry</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>
      <button className="contact-btn">Contact us</button>
    </header>
  );
};

export default Header;

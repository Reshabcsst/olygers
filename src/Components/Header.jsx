import React, { useEffect, useState } from 'react';
import logo from '../Assets/logo.png';
import '../App.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li>
            <a href="#">Services ▼</a>
            <ul className="dropdown">
              <li><a href="#">Sea Freight</a></li>
              <li><a href="#">Air Freight</a></li>
              <li><a href="#">Road Transport</a></li>
              <li><a href="#">Warehousing</a></li>
            </ul>
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

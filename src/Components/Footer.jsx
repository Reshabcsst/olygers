import React from 'react';
import logo from '../Assets/footerlogo.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { IoHomeOutline, IoSendOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={logo} alt="Olygers Logo" className="footer-logo" />
                    <p>
                        At Olygers, we specialize in managing complex logistics, with a focus on
                        Over-Dimensional Cargo (ODC) and global freight solutions. Our expertise,
                        combined with a customer-first approach, ensures safe, timely, and
                        cost-effective delivery for businesses of all sizes.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Pages</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Enquiry</a></li>
                            <li><a href="#">Faq</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Supply chain solutions</a></li>
                            <li><a href="#">Warehousing</a></li>
                            <li><a href="#">Transport</a></li>
                            <li><a href="#">Air freight</a></li>
                            <li><a href="#">Sea freight</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contact us</h3>
                        <ul className="contact-info">
                            <li><FiPhoneCall style={{fontSize:"20px"}}/> 8920508865</li>
                            <li><IoSendOutline  style={{fontSize:"20px"}}/> animesh.chak@olygers.com</li>
                            <li><IoHomeOutline style={{fontSize:"40px"}}/> Qube, room no 219B, raharhat, newtown, kol - 700156 WB</li>
                        </ul>

                        <h3 className='mt'>Follow us on</h3>
                        <div className="social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><BsInstagram /></a>
                            <a href="#"><BsTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="cprht">
            <p>Copyright © 2023 olygerslogistics. All rights reserved. Designed & Developed by Teclumin pv ltd</p>
        </div>
        </>
    );
};

export default Footer;

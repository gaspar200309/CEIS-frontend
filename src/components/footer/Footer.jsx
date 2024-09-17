import React from 'react';
import './Footer.css';
import { FaTiktok, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h1 className="footer-logo">CEIS</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quam consectetur quod commodi? Quae, ex.</p>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebook />
            <FaTiktok />
          </div>
        </div>
        <div className="footer-section links">
          <h2>Product</h2>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Tour</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Work</h2>
          <ul>
            <li><a href="#">Our Portfolio</a></li>
            <li><a href="#">Lastest Work</a></li>
            <li><a href="#">Brands</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Stuff</h2>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Help Desk</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

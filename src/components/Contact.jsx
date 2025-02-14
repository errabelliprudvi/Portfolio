import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import cp from "../assets/prudvicp.jpg"
import "../styles/contact.css"; // Import external CSS

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Left: Image */}
      <div className="contact-image-container">
        <img
          src={cp}// Replace with actual image path
          alt="Contact"
          className="contact-image"
        />
      </div>

      {/* Right: Contact Info */}
      <div className="contact-info">
        <h2>Reach out</h2>
        <p className="name">Prudvi Errabelli</p>
        <p className="email">prudvierrabelli@gmail.com</p>

        {/* Social Media Icons */}
        <p className="contact-social">Connect with me</p>
        <div className="social-icons">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/prudvi-errabelli">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from "react";
import { motion } from "framer-motion";
import "../styles/aboutme.css";
import cp from "../assets/prudvicp.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      {/* Left - Text */}
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
          I am a final-year Computer Science student with hands-on experience in Java, Python, C++, and full-stack
          development. I have a strong focus on building scalable applications using React.js, Node.js, MySQL, and
          developing Android apps with Kotlin. I also have experience with real-time systems using WebSockets and
          process management for Linux. I am dedicated to creating efficient, clean, and maintainable code.
           
        </p>
        <p>You can view my full resume <a href="https://drive.google.com/file/d/1MuZvXs7ThYC_qyFjofR9ff4A6hkf11xO/view?usp=drive_link">here.</a></p>
      </motion.div>

      {/* Right - Image */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={cp} alt="Prudvi Errabelli" />
      </motion.div>
    </section>
  );
};

export default AboutMe;

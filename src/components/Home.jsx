import React from "react";
import { motion } from "framer-motion";
import "../styles/home.css";
import dp from "../assets/prudvicp.jpg";
import leetcode from "../assets/leetcode.png";
import{FaGithub, FaLinkedin} from "react-icons/fa"

const Home = () => {
  return (
    <section className="home">
      {/* Left - Image with animation */}
      <motion.div 
        className="home-image"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <img src={dp} alt="Prudvi Errabelli" />
      </motion.div>

      {/* Right - Text */}
      <motion.div 
        className="home-text"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1>Prudvi Errabelli</h1>
        <p>Software Engineer</p>
        

        <div className="header-icons">
               <a href="https://leetcode.com/u/Lets-prove" target="_blank" rel="noopener noreferrer">
                 <img src={leetcode} alt="LeetCode" style={{ width: "50px", height: "50px" }} />
               </a>

               <a href="https://github.com/errabelliprudvi"target="_blank" rel="noopener noreferrer">
                         <FaGithub size={50}   style={{ color: 'white' }}/>
                         </a>

                <a href="https://www.linkedin.com/in/prudvi-errabelli"target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={50}   style={{ color: 'white' }}/>
                </a>
             </div>
      </motion.div>
    </section>
  );
};

export default Home;


/* 
<motion.button
          className="home-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}          
        >
          <a href="https://www.linkedin.com/in/prudvi-errabelli" target="_blank" className="Linkedin-link">
              Reach Out
            </a>
        </motion.button>
*/
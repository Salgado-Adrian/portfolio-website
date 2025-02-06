import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Import the styles
import resumePDF from "../assets/resume.pdf"; // Resume File
import profilePic from "../assets/profile1.JPG"; // Profile Picture
import { FaChevronDown } from "react-icons/fa"; // Import Scroll-Down Arrow Icon

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  return (
    <section className="hero">
      <div className="content">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Adrian Salgado</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          🚀 Passionate Computer Science Student | 💻 Developer
        </motion.p>

        {/* Remove "View Projects" Button */}
        <div className="buttons">
          <motion.a 
            href={resumePDF} 
            target="_blank" 
            className="btn"
            whileHover={{ scale: 1.1 }}
          >
            View My Resume
          </motion.a>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div 
          className="scroll-down"
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollToSection("about")}
        >
          <FaChevronDown size={30} color="#ff4d4d" />
        </motion.div>

        <motion.img 
          src={profilePic} 
          alt="Adrian Salgado" 
          className="profile-pic"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.8, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Home;
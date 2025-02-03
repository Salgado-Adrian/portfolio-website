import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Add styles here
import resumePDF from "../assets/resume.pdf"; // Add your resume file
import profilePic from "../assets/saucy.jpg";

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
          🚀 Passionate Computer Science Student | 💻 Developer | Tech Enthusiast
        </motion.p>

        <div className="buttons">
          <motion.a 
            href={resumePDF} 
            target="_blank" 
            className="btn"
            whileHover={{ scale: 1.1 }}
          >
            View My Resume
          </motion.a>

          <motion.a 
            href="#projects" 
            className="btn-outline"
            whileHover={{ scale: 1.1 }}
          >
            View Projects
          </motion.a>
        </div>

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

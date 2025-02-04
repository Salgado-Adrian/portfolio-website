import React, { useState, useEffect } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ Update Mobile State on Resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      {/* ✅ Mobile Menu Button */}
      {isMobile && (
        <div className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      )}

      {/* ✅ Navbar */}
      <nav className={`nav ${isOpen ? "nav-open" : "nav-closed"}`}>
        {["Home", "About", "Projects", "Contact"].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.1, color: "#ff4d4d" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              scrollToSection(section.toLowerCase());
              setIsOpen(false); // Close menu on mobile after clicking
            }}
            className="nav-button"
          >
            {section}
          </motion.button>
        ))}
      </nav>
    </header>
  );
};

// ✅ **Ensure Smooth Scrolling**
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default Header;

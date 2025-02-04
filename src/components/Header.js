import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ Detect screen size changes to update mobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      {/* ✅ Mobile Menu Button (Opens the Menu) */}
      {isMobile && (
        <div className="menu-button" onClick={() => setIsOpen(true)}>
          <FaBars className="icon" />
        </div>
      )}

      {/* ✅ Navbar */}
      <nav className={`nav ${isOpen ? "nav-open" : "nav-closed"}`}>
        {/* ✅ Close Button (Only Visible on Mobile) */}
        {isMobile && (
          <div className="close-button" onClick={() => setIsOpen(false)}>
            <FaTimes className="icon" />
          </div>
        )}

        {["Home", "About", "Projects", "Contact"].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.1, color: "#ff4d4d" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              scrollToSection(section.toLowerCase());
              setIsOpen(false);
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

// ✅ Smooth Scrolling
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default Header;

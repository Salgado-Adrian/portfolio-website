import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle mobile menu

  return (
    <header style={styles.header}>
      {/* ✅ Mobile Menu Button */}
      <div style={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes style={styles.icon} /> : <FaBars style={styles.icon} />}
      </div>

      {/* ✅ Navbar */}
      <nav style={{ ...styles.nav, ...(isOpen ? styles.navOpen : {}) }}>
        {["Home", "About", "Projects", "Contact"].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.1, color: "#ff4d4d" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              scrollToSection(section.toLowerCase());
              setIsOpen(false); // Close menu on mobile after clicking
            }}
            style={styles.button}
          >
            {section}
          </motion.button>
        ))}
      </nav>
    </header>
  );
};

// ✅ **Styles for Both Desktop & Mobile**
const styles = {
  header: {
    position: "fixed",
    top: "15px",
    left: "15px",
    zIndex: 1000,
  },
  menuButton: {
    display: "none", // Hide by default (for desktop)
    fontSize: "24px",
    cursor: "pointer",
    color: "white",
    position: "fixed",
    top: "15px",
    left: "15px",
    zIndex: 1100,
  },
  icon: {
    fontSize: "28px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  button: {
    border: "none",
    background: "none",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },
  navOpen: {
    flexDirection: "column",
    position: "fixed",
    top: "0",
    left: "-250px",
    width: "200px",
    height: "100vh",
    backgroundColor: "#111",
    paddingTop: "60px",
    transition: "0.3s",
  },
};

// ✅ **Ensure Smooth Scrolling**
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default Header;

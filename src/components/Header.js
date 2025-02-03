import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {["Home", "About", "Projects", "Contact"].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.1, color: "#ff4d4d" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(section.toLowerCase())}
            style={styles.button}
          >
            {section}
          </motion.button>
        ))}
      </nav>
    </header>
  );
};

// ✅ Remove Background & Box Shadow
const styles = {
  header: {
    position: "fixed",
    top: "15px",
    left: "15px",
    zIndex: 1000,
    background: "none", // ✅ Remove background
    padding: "0", // ✅ Remove padding
    borderRadius: "0", // ✅ Remove rounded corners
    boxShadow: "none", // ✅ Remove box shadow
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
    cursor: "pointer",
  },
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default Header;

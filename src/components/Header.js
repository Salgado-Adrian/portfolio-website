import React from "react";

const Header = () => {
  return (
    <nav style={styles.nav}>
      <button style={styles.button} onClick={() => scrollToSection("home")}>
        Home
      </button>
      <button style={styles.button} onClick={() => scrollToSection("about")}>
        About
      </button>
      <button style={styles.button} onClick={() => scrollToSection("projects")}>
        Projects
      </button>
      <button style={styles.button} onClick={() => scrollToSection("contact")}>
        Contact
      </button>
    </nav>
  );
};

// Scroll to section function
const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

// Styling
const styles = {
  nav: {
    position: "fixed",
    top: "50%", // Centered vertically
    left: "20px", // Move it to the left side
    transform: "translateY(-50%)", // Centering effect
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "8px",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column", // Stack buttons vertically
    gap: "15px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  },
  button: {
    background: "transparent",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s ease",
    padding: "10px",
  },
};

export default Header;

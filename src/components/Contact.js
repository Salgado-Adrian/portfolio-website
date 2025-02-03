import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={styles.container}>
      <h1 style={styles.title}>Contact Me</h1>
      <p style={styles.description}>
        Feel free to reach out for collaborations, job opportunities, or just to connect!
      </p>
      <div style={styles.linksContainer}>
        <a href="https://www.linkedin.com/in/adrian--salgado" target="_blank" rel="noopener noreferrer" style={styles.button}>
          LinkedIn
        </a>
        <a href="https://github.com/Salgado-Adrian" target="_blank" rel="noopener noreferrer" style={styles.button}>
          GitHub
        </a>
        <a href="mailto:Adrians12099@gmail.com" style={styles.button}>
          Email Me
        </a>
      </div>
    </section>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    maxWidth: "800px",
    margin: "auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#333",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    border: "2px solid #ff4d4d",
    color: "#ff4d4d",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "0.3s",
  },
};

export default Contact;

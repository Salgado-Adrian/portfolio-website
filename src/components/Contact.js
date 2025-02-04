import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import Icons

const Contact = () => {
  return (
    <section id="contact" style={styles.container}>
      <h1 style={styles.title}>Contact Me</h1>
      <p style={styles.description}>
        Feel free to reach out for collaborations, job opportunities, or just to connect!
      </p>
      <div style={styles.linksContainer}>
        <a
          href="https://www.linkedin.com/in/adrian--salgado"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Salgado-Adrian"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          <FaGithub size={24} />
        </a>
        <a href="mailto:Adrians12099@gmail.com" style={styles.button}>
          <FaEnvelope size={24} />
        </a>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    height: "80vh",
    padding: "50px 20px",
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
    color: "#ccc",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px",
    border: "2px solid #ff4d4d",
    color: "#ff4d4d",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px", // Make buttons square
    height: "50px",
    fontSize: "24px",
  },
};

export default Contact;

import React from "react";
import "./Contact.css";
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
          className="icon-button linkedin"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Salgado-Adrian"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button github"
        >
          <FaGithub size={24} />
        </a>
        <a href="mailto:Adrians12099@gmail.com" className="icon-button email">
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
};

export default Contact;

import React from "react";
import "./About.css"; // ✅ Ensure styles are included

const About = () => {
  return (
    <section className="about-container">
      <h1>About Me</h1>
      <p>
        I am a <strong className="highlight">sophomore Computer Science student at the University of Central Florida (UCF)</strong>
        with a passion for <strong className="highlight">software development and problem-solving</strong>.
        My curiosity about how technology evolves and impacts our future drives me to continuously learn and improve my skills.
      </p>

      <p>
        I have previous work experience as a <strong className="highlight">Garage Door Assistant Technician</strong>,
        where I developed problem-solving skills, hands-on experience with mechanical systems, and teamwork in a fast-paced environment.
      </p>

      <p>
        I am currently exploring different areas of <strong className="highlight">software development</strong>,
        particularly <strong className="highlight">web development and system programming</strong>. 
        I love learning how different technologies integrate and shape the world around us.
      </p>
    </section>
  );
};

export default About;

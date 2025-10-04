import { motion } from "framer-motion";
// import { useState } from "react";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { FaGithub, FaLinkedin, FaDownload, FaJs, FaReact, FaDatabase, FaCogs, FaLightbulb, FaUsers, FaExternalLinkAlt, FaCode, FaBug,FaPalette } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./App.css"; // Importing CSS file
import Education from "./AboutSection";
import Achievements from "./achievement";
import Experience from "./experience";

export default function Portfolio() {
  // const [hover, setHover] = useState(false);

  const downloadPDF = () => {
    const pdfPath =  "./Images/CV.pdf"; // Path to PDF inside 'public' folder
    const a = document.createElement("a");
    a.href = pdfPath;
    a.download = "Muhammad Ahmad Resume.pdf"; // Set the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="nav-title">Hi there, I am Ahmad</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div className="hero-section" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="profile-container">
            <div>
              <h1 className="title">Muhammad Ahmad</h1>
              <TypeAnimation sequence={["Full-Stack Developer", 1000, "React & Node.js Expert", 1000,"C# Desktop Application Developer", 1000]} speed={50} className="subtitle" repeat={Infinity} />
            </div>
            <img src="./Images/me4.jpg" alt="Muhammad Ahmad" className="profile-img" />
          </div>
        </motion.div>

      {  /* About Me Section */}
       <motion.div
          id="about"
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p style={{ fontSize: '1.15rem', fontWeight: '500', lineHeight: '1.8', marginBottom: '25px' }}>
            Passionate Computer Scientist from UET Lahore specializing in Full Stack Development. Committed to pushing boundaries and innovating in technology.
          </p>
          <ul className="about-list">
         
          

            <li><strong style={{ color: "royalblue" }}>Name:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Muhammad Ahmad</li>
            <li><strong style={{ color: "royalblue" }}>Email:</strong>&nbsp;&nbsp;&nbsp;&nbsp; ahmadhoney7850@gmail.com</li>
            <li><strong style={{ color: "royalblue" }}>Phone:</strong>&nbsp;&nbsp;&nbsp;&nbsp; +92 30433350835</li>
            <li><strong style={{ color: "royalblue" }}>Country:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Pakistan</li>
            <li><strong style={{ color: "royalblue" }}>City:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Lahore</li>
          </ul>
        
          <motion.button className="custom-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={downloadPDF}>
            <FaDownload /> Download CV
          </motion.button>
        </motion.div>
      
        <Education/>
        <Achievements/>
        <Experience/>
        {/* Services Section */}
        <motion.div
          id="services"
          className="services-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            {[{ service: "Full stack Web Application Development", icon: FaCode }, { service: "Desktop Application Development", icon: FaCogs }, { service: "Debugging & Optimization", icon: FaBug }].map(({ service, icon: Icon }, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Icon className="service-icon" />
                <h3 className="service-title">{service}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

<motion.div
  id="skills"
  className="skills-section"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2 className="section-title">Skills</h2>
  <div className="skills-grid">
    {[
      { skill: "JavaScript & Python", icon: FaJs }, 
      { skill: "React & Node.js", icon: FaReact }, 
      { skill: "Database Management", icon: FaDatabase }, 
      { skill: "OOP & Desktop Dev (C#)", icon: FaCogs }, 
      { skill: "Problem Solving", icon: FaLightbulb }, 
      { skill: "Leadership & Decision Making", icon: FaUsers },
      { skill: "UI/UX Design (Figma)", icon: FaPalette } // New Skill Added
    ].map(({ skill, icon: Icon }, index) => (
      <motion.div
        key={index}
        className="skill-card"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <Icon className="skill-icon" />
        <div>
          <h3 className="skill-title">{skill}</h3>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>


<motion.div
  id="projects"
  className="projects-section"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2 className="section-title">Projects</h2>
  <div className="projects-grid">
    {[
      { name: "User Authentication System", link: "https://user-authentication-system-lyart.vercel.app/", img: "./Images/User.png" },
      { name: "University Map application", link: "https://hannanm10.github.io/UET-Navigation-System/", img: "./Images/Map.jpg" },
      { name: "Data Visualization Dashboard", link: "https://stocks-and-crypto-visualization-dashboard-uo2t.vercel.app/", img: "./Images/stock.png" },
      { name: "Sorting Visualizer", link: "https://data-sorting-visualizer.vercel.app/", img: "./Images/Sorting.png" },
      { name: "Solitaire Game", link: "https://solitaire-game-phi.vercel.app/", img: "./Images/Soliatire.png" },
      { name: "Student Management System", link: "https://student-managment-system-mauve.vercel.app/", img: "./Images/Student.png" },
      { name: "Scrap Xpert", link: "https://scrap-xpert.vercel.app/", img: "./Images/Scrap.png" },
      { name: "Foodpanda Desktop Application", link: "https://food-panda-clone-sage.vercel.app/", img: "./Images/foodpanda.png" },
      { name: "TankWars Desktop Game", link: "https://tank-wars-blond.vercel.app/", img: "./Images/game.png" }
    ].map(({ name, link, img }, index) => (
      <motion.div
        key={index}
        className="project-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <img src={img} alt={name} className="project-img" />
        <h3 className="project-title">{name}</h3>
        <a 
          href={link} 
          className="project-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click to View Project <FaExternalLinkAlt />
        </a>
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* Contact Me Section */}
        <motion.div
          id="contact"
          className="contact-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="text" style={{ fontSize: '1.15rem', fontWeight: '500', lineHeight: '1.8' }}>Let's build something amazing together! Feel free to reach out for collaborations, projects, or just a chat.</p>
          <div className="contact-icons">
            <a href="https://github.com/Ahmad-17R" className="contact-icon"  target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/muhammad-ahmad-5217702a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="contact-icon"  target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            {/* <a href="#" className="contact-icon"  target="_blank" rel="noopener noreferrer"><FaEnvelope /></a> */}
            <a href="https://www.fiverr.com/s/e65G7qg" className="contact-icon"  target="_blank" rel="noopener noreferrer"><SiFiverr /></a>
            <a href="https://www.upwork.com/freelancers/~01ce4558c053f29d3c?mp_source=share" className="contact-icon"  target="_blank" rel="noopener noreferrer"><SiUpwork /></a>
          </div>
        </motion.div>
      </div>
      {/* Footer */}
      <footer className="footer">© Portfolio of Software Developer Muhammad Ahmad </footer>
    </div>
  );
}
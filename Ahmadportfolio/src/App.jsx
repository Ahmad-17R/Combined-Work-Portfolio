import { motion } from "framer-motion";
// import { useState } from "react";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { FaGithub, FaLinkedin, FaDownload, FaJs, FaReact, FaDatabase, FaCogs, FaLightbulb, FaUsers, FaExternalLinkAlt, FaCode, FaBug,FaPalette } from "react-icons/fa";
import "./App.css"; // Importing CSS file
import Education from "./AboutSection";
import Achievements from "./achievement";
import Experience from "./experience";
import Testimonial from "./testimonial";

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
          <li><a href="#testimonial">Testimonial</a></li>
        </ul>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div className="hero-section" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="profile-container">
            <div>
              <h1 className="title">Muhammad Ahmad</h1>
              <p className="subtitle">Founder @ Godiddly — Full-Stack AI Engineer & Automation Expert</p>
            </div>
            <img src="./Images/dp4.png" alt="Muhammad Ahmad" className="profile-img" />
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
            Full-stack software engineer and founder of <strong>Godiddly</strong>, an IT services company delivering web, desktop, and automation solutions for businesses worldwide. Computer Science undergraduate at UET Lahore with a track record of shipping production-grade applications for international clients.
          </p>
          <ul className="about-list">



            <li><strong style={{ color: "var(--primary-light)" }}>Name:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Muhammad Ahmad</li>
            <li><strong style={{ color: "var(--primary-light)" }}>Role:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Founder & Full-Stack AI Engineer, Godiddly</li>
            <li><strong style={{ color: "var(--primary-light)" }}>Email:</strong>&nbsp;&nbsp;&nbsp;&nbsp; ahmadhoney7850@gmail.com</li>
            <li><strong style={{ color: "var(--primary-light)" }}>Phone:</strong>&nbsp;&nbsp;&nbsp;&nbsp; +92 3043330835</li>
            <li><strong style={{ color: "var(--primary-light)" }}>Country:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Pakistan</li>
            <li><strong style={{ color: "var(--primary-light)" }}>City:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Lahore</li>
          </ul>
        
          <motion.button className="custom-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={downloadPDF}>
            <FaDownload /> Download CV
          </motion.button>
        </motion.div>
      
        <Education/>
        <Achievements/>
        <Experience/>
        <Testimonial/>
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
      {
        name: "Travel Business Application",
        desc: "Enterprise-grade system for managing large-scale travel transactions, expense tracking, and bookings for a travel business.",
        link: "https://www.fiverr.com/s/e65G7qg",
        img: "./Images/TravelBusiness.png",
        type: "case-study",
      },
      {
        name: "Airport Ground Simulator for Runway Operations",
        desc: "Web-based simulation system for modeling and analyzing airport ground operations, queue length, hold points, and runway throughput.",
        link: "https://www.fiverr.com/s/e65G7qg",
        img: "./Images/AirportSimulator.png",
        type: "case-study",
      },
      {
        name: "Smart Booking App for a Travel Agency",
        desc: "Dynamic, script-driven web application that lets a travel agency generate transactions and bookings on demand.",
        link: "https://www.fiverr.com/s/e65G7qg",
        img: "./Images/GoogleScriptTravel.png",
        type: "case-study",
      },
      {
        name: "Hotel Management & Booking Platform (Azure)",
        desc: "Full-stack hotel booking platform built on a modern cloud stack with Microsoft Azure, from search to reservation.",
        link: "https://www.fiverr.com/s/e65G7qg",
        img: "./Images/HotelAzure.png",
        type: "case-study",
      },
      {
        name: "Stock Market & Crypto Analytics Dashboard",
        desc: "Real-time data visualization dashboard tracking TESLA stock alongside major cryptocurrencies like BTC and ETH.",
        link: "https://stocks-and-crypto-visualization-dashboard-uo2t.vercel.app/",
        img: "./Images/stock.png",
        type: "demo",
      },
      {
        name: "Sorting Algorithm Visualizer",
        desc: "Interactive GUI for visualizing and executing a range of sorting algorithms step-by-step.",
        link: "https://data-sorting-visualizer.vercel.app/",
        img: "./Images/Sorting.png",
        type: "demo",
      },
      {
        name: "Scrap Xpert — Inventory & Sales System",
        desc: "Full-featured desktop application for a scrap business, tracking sales, purchases, vouchers, and inventory in real time.",
        link: "https://scrap-xpert.vercel.app/",
        img: "./Images/Scrap.png",
        type: "demo",
      },
      {
        name: "Solitaire Desktop Game",
        desc: "Classic Solitaire card game built with C# and the .NET WinForms framework.",
        link: "https://solitaire-game-phi.vercel.app/",
        img: "./Images/Soliatire.png",
        type: "demo",
      },
      {
        name: "University Campus Navigation System",
        desc: "Desktop navigation application built with C#/.NET, mapping and routing across a full university campus.",
        link: "https://hannanm10.github.io/UET-Navigation-System/",
        img: "./Images/Map.jpg",
        type: "demo",
      },
    ].map(({ name, desc, link, img, type }, index) => (
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
        <p className="project-desc">{desc}</p>
        <a
          href={link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {type === "demo" ? "Live Demo" : "View Case Study"} <FaExternalLinkAlt />
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
      <footer className="footer">© Portfolio of Muhammad Ahmad — Founder, Godiddly</footer>
    </div>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { SiFiverr, SiUpwork } from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
  FaBug,
  FaCogs,
  FaServer,
  FaDesktop,
  FaRobot,
  FaReact,
  FaDatabase,
  FaDocker,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./App.css"; // Importing CSS file
import Founders from "./Founders";
import Testimonial from "./testimonial";

// Headline metrics pulled from delivered client work — social proof up front.
const stats = [
  { value: "5+", label: "Client Systems Delivered" },
  { value: "54K+", label: "Transactions Processed" },
  { value: "50K+", label: "Records Automated" },
  { value: "7–8×", label: "Faster Reconciliation" },
];

const services = [
  { service: "Full-Stack Web Development", icon: FaCode, desc: "Production MERN and FastAPI/React applications built around real business workflows." },
  { service: "Desktop Application Development", icon: FaDesktop, desc: "Reliable desktop tools built with PyQt6, Windows Forms, and .NET." },
  { service: "Automation & Data Pipelines", icon: FaCogs, desc: "Python and Apps Script pipelines that validate, process, and report at scale." },
  { service: "AI & Intelligent Systems", icon: FaRobot, desc: "NLP-driven features, task decomposition, and automated decision support." },
  { service: "Backend & API Engineering", icon: FaServer, desc: "Secure REST and WebSocket APIs, relational schemas, and audit logging." },
  { service: "Debugging & Optimization", icon: FaBug, desc: "Performance tuning and reliability fixes for existing production systems." },
];

const techStack = [
  { category: "Languages", icon: FaCode, items: "Python · TypeScript · JavaScript · C++ · C# · SQL" },
  { category: "Frontend", icon: FaReact, items: "React · TypeScript · Tailwind CSS · HTML5 · CSS3" },
  { category: "Backend & APIs", icon: FaServer, items: "FastAPI · REST · WebSockets · Node.js · Apps Script" },
  { category: "Databases", icon: FaDatabase, items: "MySQL · MongoDB · Schema Design" },
  { category: "Desktop", icon: FaDesktop, items: "PyQt6 · Windows Forms · .NET" },
  { category: "Tools & DevOps", icon: FaDocker, items: "Git · GitHub · Docker" },
];

const projects = [
  {
    name: "Travel Business Application",
    desc: "Enterprise system for large-scale travel transactions, expense tracking, and bookings, with multi-currency normalization and full audit logging.",
    link: "https://www.fiverr.com/s/e65G7qg",
    img: "./Images/TravelBusiness.png",
    type: "case-study",
  },
  {
    name: "Airport Ground Traffic Simulator",
    desc: "Discrete-event simulation engine modeling runway operations, queue lengths, and hold points using a NaSch cellular-automaton model with Dijkstra-based routing.",
    link: "https://www.fiverr.com/s/e65G7qg",
    img: "./Images/AirportSimulator.png",
    type: "case-study",
  },
  {
    name: "Smart Booking App for a Travel Agency",
    desc: "Script-driven web application that lets a travel agency generate bookings and transactions on demand, backed by real-time reporting dashboards.",
    link: "https://www.fiverr.com/s/e65G7qg",
    img: "./Images/GoogleScriptTravel.png",
    type: "case-study",
  },
  {
    name: "Hotel Management & Booking Platform",
    desc: "Full-stack hotel booking platform on Microsoft Azure, taking guests from search to confirmed reservation, built for scale and reliability.",
    link: "https://www.fiverr.com/s/e65G7qg",
    img: "./Images/HotelAzure.png",
    type: "case-study",
  },
  {
    name: "Stock Market & Crypto Analytics Dashboard",
    desc: "Real-time data-visualization dashboard tracking TESLA stock alongside major cryptocurrencies such as BTC and ETH.",
    link: "https://stocks-and-crypto-visualization-dashboard-uo2t.vercel.app/",
    img: "./Images/stock.png",
    type: "demo",
  },
  {
    name: "Scrap Xpert — Inventory & Sales System",
    desc: "Desktop application for a scrap business, tracking sales, purchases, vouchers, and inventory in real time.",
    link: "https://scrap-xpert.vercel.app/",
    img: "./Images/Scrap.png",
    type: "demo",
  },
];

export default function Portfolio() {
  // Show a curated first 4 projects; reveal the rest behind "Show More".
  const [showAllProjects, setShowAllProjects] = useState(false);
  const PROJECTS_PREVIEW_COUNT = 4;
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, PROJECTS_PREVIEW_COUNT);
  const hiddenCount = projects.length - PROJECTS_PREVIEW_COUNT;

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="nav-title">Godiddly</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Tech Stack</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#founders">Founders</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div className="hero-section" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="profile-container">
            <img src="./logo.png" alt="Godiddly logo" className="hero-logo" />
            <div>
              <p className="hero-eyebrow">IT Services &amp; Software Engineering</p>
              <h1 className="title">Godiddly</h1>
              <p className="subtitle">We design, build, and ship full-stack web, desktop, and automation software for businesses worldwide.</p>
              <div className="hero-cta">
                <a href="#projects" className="custom-btn">View Our Work <FaArrowRight /></a>
                <a href="#contact" className="custom-btn btn-secondary">Get in Touch</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Us Section */}
        <motion.div
          id="about"
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Us</h2>
          <p style={{ fontSize: "1.15rem", fontWeight: "500", lineHeight: "1.8", marginBottom: "25px" }}>
            <strong>Godiddly</strong> is an IT services company delivering full-stack web applications, desktop software, and automation solutions for clients across the globe. We partner with businesses to turn complex operational problems into reliable, production-grade software — from booking and expense platforms to simulation engines and AI-driven tools.
          </p>
          <ul className="about-list">
            <li><strong style={{ color: "var(--primary-light)" }}>Company:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Godiddly — IT Services &amp; Software Engineering</li>
            <li><strong style={{ color: "var(--primary-light)" }}>Founded:</strong>&nbsp;&nbsp;&nbsp;&nbsp; 2024</li>
            <li><strong style={{ color: "var(--primary-light)" }}>Focus:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Web, Desktop, Automation &amp; AI Systems</li>
            <li><strong style={{ color: "var(--primary-light)" }}>Clients:</strong>&nbsp;&nbsp;&nbsp;&nbsp; International, across multiple industries</li>
            <li><strong style={{ color: "var(--primary-light)" }}>Based in:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Lahore, Pakistan — working worldwide</li>
          </ul>
        </motion.div>

        {/* Stats / Impact Section */}
        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="stats-grid">
            {stats.map(({ value, label }, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="stat-number">{value}</span>
                <span className="stat-label">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            {services.map(({ service, icon: Icon, desc }, index) => (
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
                <p className="service-desc">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          id="skills"
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Tech Stack</h2>
          <div className="skills-grid">
            {techStack.map(({ category, icon: Icon, items }, index) => (
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
                  <h3 className="skill-title">{category}</h3>
                  <p className="skill-tech">{items}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work / Projects Section */}
        <motion.div
          id="projects"
          className="projects-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Work</h2>
          <div className="projects-grid">
            {visibleProjects.map(({ name, desc, link, img, type }, index) => (
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
          {hiddenCount > 0 && (
            <div className="show-more-wrap">
              <button
                type="button"
                className="custom-btn show-more-btn"
                onClick={() => setShowAllProjects((prev) => !prev)}
                aria-expanded={showAllProjects}
              >
                {showAllProjects ? (
                  <>Show Less <FaChevronUp /></>
                ) : (
                  <>Show More (+{hiddenCount}) <FaChevronDown /></>
                )}
              </button>
            </div>
          )}
        </motion.div>

        <Founders />
        <Testimonial />

        {/* Contact Section */}
        <motion.div
          id="contact"
          className="contact-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Work With Us</h2>
          <p className="text" style={{ fontSize: "1.15rem", fontWeight: "500", lineHeight: "1.8" }}>Have a project in mind? Let's build reliable software for your business. Reach out for collaborations, case studies, or a quick chat.</p>
          <div className="contact-icons">
            <a href="https://github.com/Ahmad-17R" className="contact-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/muhammad-ahmad-5217702a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="contact-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.fiverr.com/s/e65G7qg" className="contact-icon" target="_blank" rel="noopener noreferrer" aria-label="Fiverr"><SiFiverr /></a>
            <a href="https://www.upwork.com/freelancers/~01ce4558c053f29d3c?mp_source=share" className="contact-icon" target="_blank" rel="noopener noreferrer" aria-label="Upwork"><SiUpwork /></a>
          </div>
        </motion.div>
      </div>
      {/* Footer */}
      <footer className="footer">© 2026 Godiddly — Full-stack web, desktop &amp; automation software. Founded by Muhammad Ahmad &amp; Muhammad Hassaan Shahid.</footer>
    </div>
  );
}

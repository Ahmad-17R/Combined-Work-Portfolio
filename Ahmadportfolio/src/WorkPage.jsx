import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

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
  {
    name: "Sorting Algorithm Visualizer",
    desc: "Interactive visualizer animating popular sorting algorithms — Bubble, Merge, Quick, and more — with adjustable speed and array size.",
    link: "https://www.fiverr.com/s/e65G7qg",
    img: "./Images/Sorting.png",
    type: "demo",
  },
  {
    name: "Student Management System",
    desc: "Desktop student records platform handling enrollment, grades, attendance, and reporting for educational institutions.",
    link: "https://www.fiverr.com/s/e65G7qg",
    img: "./Images/Student.png",
    type: "case-study",
  },
  {
    name: "Solitaire Game",
    desc: "Fully playable browser-based Solitaire game with drag-and-drop mechanics, win detection, and smooth animations.",
    link: "https://www.fiverr.com/s/e65G7qg",
    img: "./Images/Soliatire.png",
    type: "demo",
  },
];

export default function WorkPage() {
  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="nav-title">Godiddly</h2>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="relative z-10">
        {/* Page Header */}
        <motion.div
          className="work-page-header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link to="/" className="back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="section-title" style={{ marginTop: "1rem" }}>
            Our Work
          </h1>
          <p className="work-page-sub">
            A full view of the systems, tools, and applications we've shipped for clients worldwide.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-section" style={{ paddingTop: "0" }}>
          <div className="projects-grid">
            {projects.map(({ name, desc, link, img, type }, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
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
                  {type === "demo" ? "Live Demo" : "View Case Study"}{" "}
                  <FaExternalLinkAlt />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        © 2026 Godiddly — Full-stack web, desktop &amp; automation software.
        Founded by Muhammad Ahmad &amp; Muhammad Hassaan Shahid.
      </footer>
    </div>
  );
}

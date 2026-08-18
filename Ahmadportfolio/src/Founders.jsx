import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import "./founders.css";

// Leadership team. Both founders have headshots in public/Images/. The initials
// field stays as a fallback avatar if an image ever fails to load / is removed.
const founders = [
  {
    name: "Muhammad Ahmad",
    role: "Founder & Full-Stack AI Engineer",
    bio: "Founder of Godiddly. Full-stack engineer delivering production web, desktop, and automation systems for international clients — owning technical architecture and delivery end-to-end.",
    image: "./Images/dp4.png",
    initials: "MA",
    links: [
      { icon: FaGithub, url: "https://github.com/Ahmad-17R", label: "GitHub" },
      { icon: FaLinkedin, url: "https://www.linkedin.com/in/muhammad-ahmad-5217702a7", label: "LinkedIn" },
      { icon: SiFiverr, url: "https://www.fiverr.com/s/e65G7qg", label: "Fiverr" },
    ],
  },
  {
    name: "Muhammad Hassaan Shahid",
    role: "Co-Founder & Software Engineer",
    bio: "Co-Founder of Godiddly. Builds AI-driven web applications, discrete-event simulation engines, and backend platforms with Python, FastAPI, React, and the MERN stack.",
    image: "./Images/hassaan.png",
    initials: "MH",
    links: [
      { icon: FaGithub, url: "https://github.com/M-Hassaan-Shahid", label: "GitHub" },
      { icon: FaLinkedin, url: "https://www.linkedin.com/in/m-hassaan-shahid", label: "LinkedIn" },
    ],
  },
];

export default function Founders() {
  return (
    <motion.div
      id="founders"
      className="founders-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Founders</h2>
      <p className="founders-intro">
        The people behind Godiddly — engineers who build and ship the software our clients rely on.
      </p>
      <div className="founders-grid">
        {founders.map(({ name, role, bio, image, initials, links }, index) => (
          <motion.div
            key={index}
            className="founder-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            {image ? (
              <img src={image} alt={name} className="founder-avatar" />
            ) : (
              <div className="founder-avatar founder-initials" aria-hidden="true">{initials}</div>
            )}
            <h3 className="founder-name">{name}</h3>
            <p className="founder-role">{role}</p>
            <p className="founder-bio">{bio}</p>
            <div className="founder-links">
              {links.map(({ icon: Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  className="founder-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on ${label}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

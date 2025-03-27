import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetails.css";

// Sample project data (Replace with actual project details from API or state)
const projects = [
  {
    id: "authentication",
    name: "User Authentication System",
    description: "A secure authentication system with JWT-based authentication and role management.",
    image: "/images/me.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    liveDemo: "#",
  },
  {
    id: "university-map",
    name: "University Map Application",
    description: "An interactive map application for university campuses, helping students navigate easily.",
    image: "/images/todo-app.jpg",
    techStack: ["React", "Leaflet.js", "Firebase"],
    github: "#",
    liveDemo: "#",
  },
];

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <h2 className="error">Project Not Found</h2>;
  }

  return (
    <motion.div
      className="project-details-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back to Projects
      </button>
      <h1 className="project-title">{project.name}</h1>
      <img src={project.image} alt={project.name} className="project-image" />
      <p className="project-description">{project.description}</p>

      <h3 className="tech-title">Tech Stack:</h3>
      <ul className="tech-list">
        {project.techStack.map((tech, index) => (
          <li key={index} className="tech-item">{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub /> GitHub Repo
        </a>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo">
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}

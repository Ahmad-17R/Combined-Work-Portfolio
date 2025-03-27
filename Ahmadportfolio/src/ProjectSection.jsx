import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { name: "User Authentication System", link: "https://user-authentication-system-lyart.vercel.app/", img: "./images/User.png" },
  { name: "University Map application", link: "https://hannanm10.github.io/UET-Navigation-System/", img: "/images/Map.jpg" },
  { name: "Data Visualization Dashboard", link: "https://stocks-and-crypto-visualization-dashboard-uo2t.vercel.app/", img: "/images/stock.png" },
  { name: "Sorting Visualizer", link: "https://data-sorting-visualizer.vercel.app/", img: "/images/Sorting.png" },
  { name: "Solitaire Game", link: "https://solitaire-game-phi.vercel.app/", img: "/images/soliatire.png" },
  { name: "Student Management System", link: "https://student-managment-system-mauve.vercel.app/", img: "/images/Student.png" },
  { name: "Scrap Xpert", link: "https://scrap-xpert.vercel.app/", img: "/images/scrap.png" },
  { name: "Foodpanda Desktop Application", link: "https://food-panda-clone-sage.vercel.app/", img: "/images/foodpanda.png" },
  { name: "TankWars Desktop Game", link: "https://tank-wars-blond.vercel.app/", img: "/images/game.png" }
];

const ProjectsSection = () => {
  return (
    <motion.div 
      id="projects" 
      className="projects-section" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(({ name, link, img }, index) => (
          <motion.div key={index} className="project-card">
            <img src={img} alt={name} className="project-img" />
            <h3 className="project-title">{name}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="project-button">
                View Project <FaExternalLinkAlt />
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;

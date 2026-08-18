import React from "react";
import { FaBriefcase, FaBuilding } from "react-icons/fa";
import "./experience.css";

const experienceData = [
  {
    jobTitle: "Founder & Lead Software Engineer",
    company: "Godiddly — IT Services",
    duration: "2024 - Present",
    description:
      "Founded and lead Godiddly, an IT services company delivering full-stack web applications, desktop software, and automation solutions for clients across the globe. Own technical architecture, project delivery, and the development team end-to-end.",
    logoUrl: "./logo.png",
    imageUrl: null,
  },
  {
    jobTitle: "Teaching Assistant",
    company: "UET Lahore",
    duration: "Sept 2024 - Present",
    description:
      "Support delivery of the Programming Fundamentals and Object-Oriented Programming courses, including lab supervision, code reviews, and mentoring students.",
    imageUrl: "./Images/exp1.jpg",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-container">
        <h2 className="section-title flex justify-center items-center gap-2">
          <FaBriefcase className="experience-icon" /> Experience
        </h2>

        {experienceData.map((experienceItem, index) => (
          <div className="experience-card" key={index}>
            {/* Left Side - Text */}
            <div className="experience-content">
              <h3 className="job-title">{experienceItem.jobTitle}</h3>
              <p className="company">{experienceItem.company}</p>
              <p className="duration">{experienceItem.duration}</p>
              <p className="description">{experienceItem.description}</p>
            </div>

            {/* Right Side - Image or Logo */}
            <div className="experience-image">
              {experienceItem.logoUrl ? (
                <div className="exp-logo-placeholder">
                  <img
                    src={experienceItem.logoUrl}
                    alt={`${experienceItem.company} logo`}
                    className="exp-logo-img"
                  />
                </div>
              ) : experienceItem.imageUrl ? (
                <img
                  src={experienceItem.imageUrl}
                  alt={experienceItem.company}
                  className="exp-img"
                />
              ) : (
                <div className="exp-logo-placeholder">
                  <FaBuilding className="exp-logo-icon" />
                  <span>Godiddly</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

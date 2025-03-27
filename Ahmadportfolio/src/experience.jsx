import React from "react";
import { FaBriefcase } from "react-icons/fa"; // Experience Icon
import "./experience.css";

const Experience = () => {
  const experienceData = {
    jobTitle: "Teaching Assistant",
    company: "UET Lahore",
    duration: "Sept 2024 - Present",
    description:
      "Working as Teaching Assistant in the course of programming fundamentals and Object oriented programming",
    imageUrl: "/images/exp1.jpg", // Replace with actual image path
  };

  return (
    <section id="experience">
      <div className="experience-container">
        <h2 className="section-title flex justify-center items-center gap-2">
          <FaBriefcase className="experience-icon" /> Experience
        </h2>

        <div className="experience-card">
          {/* Left Side - Text */}
          <div className="experience-content">
            <h3 className="job-title">{experienceData.jobTitle}</h3>
            <p className="company">{experienceData.company}</p>
            <p className="duration">{experienceData.duration}</p>
            <p className="description">{experienceData.description}</p>
          </div>

          {/* Right Side - Image */}
          <div className="experience-image">
            <img src={experienceData.imageUrl} alt="Experience" className="exp-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

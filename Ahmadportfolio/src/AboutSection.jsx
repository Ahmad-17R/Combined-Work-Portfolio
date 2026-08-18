import React from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import "./education.css";

const Education = () => {
  const educationData = [
    {
      institute: "University of Engineering and Technology Lahore (UET LHR)",
      degree: "BSc Computer Science",
      duration: "2023 - 2027 (Current)",
    },
  ];

  return (
    <section id="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <FaUniversity className="edu-icon" />
              <h3>{edu.institute}</h3>
              <p><FaGraduationCap className="icon" /> {edu.degree}</p>
              <p><FaCalendarAlt className="icon" /> {edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

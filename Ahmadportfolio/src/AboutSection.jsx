import React from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import "./education.css";

const Education = () => {
  const educationData = [
    {
      institute: "University of Engineering and Technology Lahore (UET LHR)",
      degree: "Computer Science",
      cgpa: "3.34",
      duration: "From 2023 - To 2027 (current)",
    },
    {
      institute: "Superior College For Boys",
      degree: "FSc pre-engineering",
      cgpa: "90.72%",
      duration: "From 2021 - To 2023 ",
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
              <p>CGPA: {edu.cgpa}</p>
              <p><FaCalendarAlt className="icon" /> {edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

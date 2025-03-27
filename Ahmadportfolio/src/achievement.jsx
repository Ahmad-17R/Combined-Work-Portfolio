import React from "react";
import { FaAward } from "react-icons/fa";
import "./achievement.css";

const Achievements = () => {
  const achievementsData = [
    {
      title: "Coding Competition",
      description: "Participated in coding competition in the module of problem solving, finished in top 10",
      image: "/images/cert2.jpg", // Change to actual certificate image path
    },
    {
      title: "Introduction to Database and  SQL",
      description: "Successfully completed the course of intro to database and SQL at mygreatlearning platform",
      image: "/images/cert1.jpg", // Change to actual certificate image path
    },
  ];

  return (
    <section id="achievements">
      <div className="achievements-container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-list">
          {achievementsData.map((achieve, index) => (
            <div key={index} className="achievement-card">
              <FaAward className="achieve-icon" />
              <h3>{achieve.title}</h3>
              <p>{achieve.description}</p>
              <img src={achieve.image} alt={achieve.title} className="certificate-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

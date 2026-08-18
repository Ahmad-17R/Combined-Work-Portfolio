import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="testimonial-container">
        <h2 className="section-title flex justify-center items-center gap-2">
          <FaQuoteLeft className="testimonial-icon" /> Client Testimonial
        </h2>

        <div className="testimonial-card">
          <img src="./logo.png" alt="Godiddly logo" className="testimonial-logo" />

          <video
            className="testimonial-video"
            controls
            preload="metadata"
          >
            <source src="./Images/godiddly-client-review.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p className="testimonial-caption">
            A candid review from a content creator and Godiddly client — real feedback on the results we delivered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

import React, { useEffect, useRef } from "react";
import JobTag from "./JobTag";
import "./scss/JobCard.scss";

function JobCard({ details }) {
  const cardRef = useRef(null);
  const animateCSS = () =>
    new Promise((resolve, reject) => {
      let element = cardRef.current;
      element.classList.add("animate__animated", "animate__bounceIn");

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd() {
        element.classList.remove("animate__animated", "animate__bounceIn");
        resolve("Animation ended");
      }

      element.addEventListener("animationend", handleAnimationEnd, {
        once: true,
      });
    });

  useEffect(() => {
    animateCSS();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`job-card ${details.featured ? "featured" : ""}`}>
      <div className="job-card__details">
        <img src={details.logo} alt="" />
        <div className="details">
          <div className="top">
            <span className="name"> {details.company} </span>
            {details.new && <span className="new">New!</span>}
            {details.featured && <span className="featured">Featured</span>}
          </div>
          <div className="role">{details.position}</div>
          <div className="bottom">
            {details.postedAt} <span className="dot">.</span> {details.contract}
            <span className="dot">.</span> {details.location}
          </div>
        </div>
      </div>
      <div className="job-card__tags">
        <JobTag tag={details.role} />
        <JobTag tag={details.level} />
        {details.languages?.map((language) => (
          <JobTag tag={language} />
        ))}
        {details.tools?.map((tool) => (
          <JobTag tag={tool} />
        ))}
      </div>
    </div>
  );
}

export default JobCard;

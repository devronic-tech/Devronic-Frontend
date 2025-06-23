import React from "react";
import "./DevCyclePage.css";

const coreValues = [
  {
    icon: "💬",
    title: "Transparent Communication",
    desc: "Maintaining open and honest dialogue with clients throughout the process.",
    position: "top-left",
  },
  {
    icon: "💻",
    title: "High-Quality Code",
    desc: "Writing clean, efficient, and maintainable code for robust solutions.",
    position: "top-center",
  },
  {
    icon: "🏆",
    title: "Effective Project Mgmt",
    desc: "Agile methodologies ensure smooth delivery and client satisfaction.",
    position: "top-right",
  },
  {
    icon: "🔗",
    title: "Scalability & Security",
    desc: "Building future-proof systems with robust security measures.",
    position: "bottom-left",
  },
  {
    icon: "💡",
    title: "Continuous Innovation",
    desc: "Embracing new technologies to deliver cutting-edge solutions.",
    position: "bottom-center",
  },
  {
    icon: "🎯",
    title: "User-Centric Design",
    desc: "Crafting intuitive and engaging user experiences at every touchpoint.",
    position: "bottom-right",
  },
];

const DevCyclePage = () => {
  return (
    <div className="dev-cycle-page">
      <div className="container">
        <h2 className="section-title">Our Development Cycle:</h2>
        <p className="section-subtitle">
          At AI WebWireframe, our foundation is built upon a set of core values
          that guide every project, ensuring excellence from concept to
          deployment.
        </p>

        <div className="core-values-diagram">
          <div className="central-hub">Core Values</div>
          {coreValues.map((value) => (
            <div key={value.title} className={`value-card ${value.position}`}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>

        <div className="dev-cycle-cta">
          <p className="section-subtitle">
            These principles define our approach, fostering a collaborative
            environment and delivering innovative, high-quality solutions that
            exceed expectations.
          </p>
          <a href="/projects" className="btn">
            Explore Our Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevCyclePage;

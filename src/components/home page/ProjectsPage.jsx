import React from "react";
import "./ProjectsPage.css";

// You should place your project images in src/assets/images/
import project1 from "../../assets/images/sf.png";
import project2 from "../../assets/images/devine.png";
import project3 from "../../assets/images/wl.png";
import { Link } from "react-router-dom";

const projects = [
  // {
  //   img: project1,
  //   title: "Social Forensics",
  //   desc: "A comprehensive AI-driven analytics platform providing deep insights from Social media accounts.",
  // },
  {
    img: project2,
    title: "Devine Homz",
    desc: "Intuitive real estate website for effortless property search, listing, and management.",
    link: "https://devinehomz.com",
  },
  {
    img: project3,
    title: "Wanderlust",
    desc: "Scalable and secure online accommodation platform designed for high-volume property bookings and seamless guest management.",
    link: "https://wanderlust-63ji.onrender.com",
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.img}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>{" "}
              <a href={project.link} className="btn btn-secondary">
                Learn More
              </a><br /><br />
            </div>
          ))}
        </div>
        <Link className="btn view-all-btn" to="/projects">
          View All Products{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;

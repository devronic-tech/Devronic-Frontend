import React from "react";
import "./TechnologiesPage.css";

// Place logos in src/assets/logos/
const technologies = [
  { name: "React", logo: "/technologies/react.svg" },
  { name: "Angular", logo: "/technologies/anjular.svg" },
  { name: "Vue.js", logo: "/technologies/vue.svg" },
  { name: "Node.js", logo: "/technologies/node.svg" },
  { name: "Python", logo: "/technologies/python.svg" },
  { name: "Django", logo: "/technologies/django.svg" },
  { name: "Flask", logo: "/technologies/flask.svg" },
  { name: "AWS", logo: "/technologies/aws.svg" },
  { name: "Docker", logo: "/technologies/docker.png" },
  { name: "Kubernetes", logo: "/technologies/kub.svg" },
  { name: "TensorFlow", logo: "/technologies/Tensorflow.svg" },
  { name: "PostgreSQL", logo: "/technologies/ele.svg" },
  { name: "MongoDB", logo: "/technologies/MongoDB_Logo.svg" },
];

const TechnologiesPage = () => {
  return (
    <div className="tech-page">
      <div className="container">
        <div className="tech-header">
          <h2 className="section-title">Our Core Technologies</h2>
        </div>
        <p className="section-subtitle gapp">
          We leverage a diverse and robust technology stack to build scalable,
          high-performance, and secure applications. Our expertise spans across
          leading frameworks, cloud platforms, and AI/ML tools.
        </p>
        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="tech-logo"
              />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesPage;

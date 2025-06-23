import React from "react";
import "./HowItWorks.css";
import { Link } from "react-router-dom";

const steps = [
  {
    num: 1,
    icon: "🔍",
    title: "Discovery & Strategy",
    desc: "We deep dive into your vision, target audience, and market to define a robust project roadmap.",
  },
  {
    num: 2,
    icon: "🎨",
    title: "Design & Prototyping",
    desc: "Crafting intuitive UI/UX, and interactive prototypes for a seamless user experience.",
  },
  {
    num: 3,
    icon: "💻",
    title: "Development & Iteration",
    desc: "Bringing designs to life with clean, scalable code and agile development cycles.",
  },
  {
    num: 4,
    icon: "🚀",
    title: "Deployment & Support",
    desc: "Launching your product, providing ongoing maintenance, and continuous optimization.",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="how-it-works-page">
      <div className="container">
        <h2 className="section-title">How We Bring Your Vision to Life</h2>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="process-step">
                <div className="step-number-container">
                  <div className="step-number">{step.num}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="cta-container">
          <p className="section-subtitle">
            Ready to transform your ideas into exceptional digital experiences?
            We're here to guide you every step of the way, from concept to
            launch and beyond.
          </p>

          <Link to="/contact" className="btn"> Start Your Project Today</Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;

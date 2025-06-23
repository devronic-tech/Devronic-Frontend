import React from "react";
import "./AboutUs.css";
import AuroraText from "../components/AuroraText";
// import teamImage from "../../assets/images/about-us-team.png"; // Add your team image here

const values = [
  {
    icon: "🛡️",
    title: "People First",
    desc: "We encourage the growth of our teammates and reward their achievements.",
  },
  {
    icon: "💻",
    title: "Quality Coding",
    desc: "We strongly uphold the impact of clean, readable code through every product we build.",
  },
  {
    icon: "👑",
    title: "Ownership",
    desc: "We perform as owners and are individually accountable for what we deliver.",
  },
  {
    icon: "👁️",
    title: "User Perspective",
    desc: "We empathize with users, for it is they for whom we design and build.",
  },
];

const AboutUsPage = () => {
  return (
    <div className="about-us-page-about">
      <div className="container-about container">
        <section className="who-we-are-section-about">
          <div className="text-content-about">
            <h2>
              Who <span className="highlight-text-about">We Are?</span>
            </h2>
            <p>
              Devronic is a leading AI-powered solutions company based in
              Nagpur. We are dedicated to transforming industries with
              cutting-edge artificial intelligence and innovative technology.
              Our mission is to empower businesses with intelligent automation,
              data-driven insights, and scalable AI solutions that drive growth
              and efficiency.
            </p>
            <p>
              We envision a future where AI revolutionizes industries, making
              technology more accessible and impactful. Our goal is to be at the
              forefront of AI innovation, developing solutions that redefine the
              way businesses operate and enhance user experiences.
            </p>
            <p>
              We are committed to pushing the boundaries of AI technology.
              Whether you are a business looking for AI-driven transformation or
              a tech enthusiast passionate about AI, we welcome you to be a part
              of our journey.
            </p>
          </div>
          {/* <div className="image-content">
            <img src={teamImage} alt="Our Team at Work" />
          </div> */}
        </section>

        <section className="our-mission-section-about">
          <h2>
            Our <span className="highlight-text-about">Mission</span>
          </h2>

          <div className="values-grid-about">
            {values.map((value, index) => (
              <div className="value-card-about" key={index}>
                <div className="value-icon-about">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;

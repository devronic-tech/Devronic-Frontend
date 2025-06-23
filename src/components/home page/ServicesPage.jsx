import React from "react";
import "./ServicesPage.css";

const services = [
  {
    icon: "</>",
    title: "Web Development",
    desc: "Crafting robust, scalable, and secure web applications tailored to your business needs.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Building intuitive and high-performance native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Designing engaging user interfaces and seamless user experiences that captivate and convert.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Implementing intelligent AI solutions and workflow automation to boost efficiency and innovation.",
  },
  {
    icon: "📈",
    title: "SEO & Digital Strategy",
    desc: "Optimizing your online presence and developing data-driven digital strategies for maximum reach.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Leveraging cloud computing to build resilient, scalable, and cost-effective infrastructure.",
  },
];

const features = [
  {
    icon: "⚡️",
    title: "Rapid Prototyping",
    desc: "We bring your ideas to life quickly with agile development and iterative feedback cycles.",
  },
  {
    icon: "⭐",
    title: "Uncompromising Quality",
    desc: "Our commitment to excellence ensures every solution we deliver is top-tier and reliable.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Approach",
    desc: "Your vision is our priority; we collaborate closely to achieve shared success.",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="container">
        <h2 className="section-title">Our Comprehensive Digital Solutions</h2>
        <p className="section-subtitle">
          Empowering businesses with cutting-edge technology and innovative
          strategies to thrive in the digital age.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="why-choose-us-section">
        <div className="container">
          <h2 className="section-title">
            Why Choose <span className="highlight-text-about">Devronic </span>?
          </h2>
          <p className="section-subtitle">
            We are dedicated to delivering exceptional results through a blend
            of innovation, quality, and client collaboration.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let us help you build the future. Contact us today for a free
            consultation and personalized quote.
          </p>
          <a href="#quote" className="btn">
            Get a Free Quote →
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ServicesPage;

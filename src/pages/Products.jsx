import React from "react";
import "./Products.css";
import AuroraText from "../components/AuroraText"; // Reusing our cool component

// Dummy data for products. You can replace this with real data.
// It's good practice to include an image/logo for each product.
const products = [
  // {
  //   name: "Social Forensic",
  //   logo: "/path/to/quantum-logo.svg", // Replace with actual path
  //   description:
  //     "A comprehensive AI-driven analytics platform providing deep insights from Social media accounts.",
  //   tags: ["AI", "Data Analytics", "SaaS", "Investigation"],
  //   link: "https://social-forensics.vercel.app",
  // },
  {
    name: "Devine Homz",
    logo: "/path/to/aether-logo.svg", // Replace with actual path
    description:
      "Intuitive real estate website for effortless property search, listing, and management.",
    tags: ["Real State", "AI", "Scalable"],
    link: "https://devinehomz.com",
  },
  {
    name: "Wanderlust",
    logo: "/path/to/nebula-logo.svg", // Replace with actual path
    description:
      "Scalable and secure online accommodation platform designed for high-volume property bookings and seamless guest management.",
    tags: ["Accomodation", "B2C"],
    link: "https://wanderlust-63ji.onrender.com",
  },
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <section className="products-hero">
        <h1>
          Solutions We've <AuroraText>Built</AuroraText>
        </h1>
        <p className="section-subtitle">
          Explore our suite of innovative products, crafted with precision and
          powered by cutting-edge technology to solve real-world problems.
        </p>
      </section>

      <section className="products-grid-container">
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card-detailed" key={index}>
              <div className="product-card-header">
                {/* You can use an img tag here if you have logos */}
                {/* <img src={product.logo} alt={`${product.name} logo`} /> */}
                <h3>{product.name}</h3>
              </div>
              <p className="product-description">{product.description}</p>
              <div className="product-card-footer">
                <div className="product-tags">
                  {product.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={product.link} className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

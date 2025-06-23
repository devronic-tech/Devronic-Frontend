import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="new-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo highlight-text-about">Devronic</div>
          <a href="/contact" className="btn-gradient">
            Get AI Solutions <span>→</span>
          </a>
        </div>
        <div className="footer-bottom-grid">
          <div className="footer-column">
            <h4>Address</h4>
            <p>
              Azad Chowk, Near Hanuman Mandir, Sadar, Nagpur, Maharashtra,
              440001
            </p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>AI-Powered Solutions</h4>
            <ul>
              <li>
                <a href="#custom-agent">Custom AI Agent Development</a>
              </li>
              <li>
                <a href="#web-app">AI-Powered Web & App Development</a>
              </li>
            </ul>
          </div>
          {/* <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#aceint">AceInt</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

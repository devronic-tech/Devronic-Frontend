import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // We will create/update this file for responsiveness
import contactImage from "../assets/images/contactimg.jpg"; // Ensure this path is correct

const ContactPage = () => {
  // --- State Management for Form Inputs ---
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone_number: "",
    org_size: "",
    message: "",
  });

  // --- State for Form Submission Status ---
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'

  const form = useRef();

  // --- Handle Input Changes ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // --- Handle Form Submission with EmailJS ---
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // --- Replace with your actual EmailJS credentials ---
    const SERVICE_ID =`${import.meta.env.VITE_SERVICE_ID}`;
    const TEMPLATE_ID = `${import.meta.env.VITE_TEMPLATE_ID}`;
    const PUBLIC_KEY = `${import.meta.env.VITE_PUBLIC_ID}`;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setStatus("success");
        // Clear form after successful submission
        setFormData({
          user_name: "",
          user_email: "",
          phone_number: "",
          org_size: "",
          message: "",
        });
        setTimeout(() => setStatus(""), 3000); // Reset status after 3 seconds
      },
      (error) => {
        console.log(error.text);
        setStatus("error");
        setTimeout(() => setStatus(""), 3000); // Reset status after 3 seconds
      }
    );
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h2 className="h_contact">
          Let's Discuss what we can{" "}
          <span className="highlight-text">Build</span>, and{" "}
          <span className="highlight-text">Scale Together</span>
        </h2>
        <p className="section-subtitle">
          We would love to hear from you and will be in touch shortly.
        </p>
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h3>Fill out the Form</h3>
            <p className="form-desc">Help us with the following details</p>

            {/* The ref and onSubmit are linked to our functions */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="John Smith"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="john@company.com"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone_number"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="org-size">
                    You're reaching out to us for?
                  </label>
                  <select
                    id="org-size"
                    name="org_size"
                    value={formData.org_size}
                    onChange={handleChange}
                  >
                    <option value="">Select Organization size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-footer">
                <div className="status-message">
                  {status === "success" && (
                    <p className="success">Message sent successfully!</p>
                  )}
                  {status === "error" && (
                    <p className="error">
                      Failed to send message. Please try again.
                    </p>
                  )}
                  {status !== "success" && status !== "error" && (
                    <p>Our team will contact you as soon as possible</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-purple"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <div className="contact-image-wrapper">
            <img src={contactImage} alt="Team discussing a project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

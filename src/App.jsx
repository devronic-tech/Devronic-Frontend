import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./components/home page/ProjectsPage";
import "./index.css"; // Use the global CSS
import ScrollProgressBar from "./components/ScrollBar";
import ProductsPage from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <ScrollProgressBar className="below-header" />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProductsPage></ProductsPage>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

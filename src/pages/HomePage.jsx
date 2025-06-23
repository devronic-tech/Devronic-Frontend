import "./HomePage.css";
import { Link } from "react-router-dom";
import ServicesPage from "../components/home page/ServicesPage";
import HowItWorksPage from "../components/home page/HowItWorks";
import ProjectsPage from "../components/home page/ProjectsPage";
import TechnologiesPage from "../components/home page/TechnologiesPage";
import AuroraText from "../components/AuroraText";
import DevCyclePage from "../components/home page/DevCyclePage";
const HomePage = () => {
  return (
    <div>
      <div className="home-page-hero">
        <div className="hero-content">
          <h1>
            Building the Future of <br />
            <AuroraText> AI-Powered Applications</AuroraText>
          </h1>
          <p className="hero-subtitle">
            Transforming ideas into intelligent software solutions that drive
            innovation and growth for businesses worldwide.
          </p>
          <Link to="/projects" className="btn">
            Discover Our Products <span>→</span>
          </Link>
        </div>
      </div>
      <ServicesPage></ServicesPage>
      <HowItWorksPage></HowItWorksPage>
      <DevCyclePage></DevCyclePage>
      <ProjectsPage></ProjectsPage>
      <TechnologiesPage></TechnologiesPage>
    </div>
  );
};

export default HomePage;

import "./App.css";
// Import the GitHub icon from react-icons
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">Parachute</div>
        <div className="nav-links">
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a
            href="https://github.com"
            className="nav-link github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </nav>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Parachute</h1>
          <h2>
            The World's First Open-Source AI Governance Platform for Healthcare
          </h2>
          <p className="hero-description">
            Ensuring safe and compliant AI implementation in healthcare through
            transparent governance and collaborative oversight.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

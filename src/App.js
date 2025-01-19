import "./App.css";
// Import the GitHub icon from react-icons
import { FaGithub } from "react-icons/fa";
// Import parachute icon
import { GiParachute } from "react-icons/gi"; // Most literal parachute icon

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <GiParachute className="brand-icon" /> Parachute
        </div>
        <div className="nav-links">
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a
            href="https://systems-for-ai-governance.github.io/blog"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href="https://github.com/systems-for-ai-governance/parachute"
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
          <GiParachute className="hero-icon" />
          <h1>Parachute</h1>
          <h2>
            The World's First Open-Source AI Governance Platform for Healthcare.
          </h2>
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

import { FaGithub } from "react-icons/fa";
import { GiParachute } from "react-icons/gi";
import { Link } from "react-router-dom";

function Docs() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", content: "Overview of Parachute and its benefits" },
        { title: "Quick Start Guide", content: "Step-by-step guide to get started" },
        { title: "Installation", content: "How to install and configure Parachute" }
      ]
    },
    {
      title: "Core Features",
      items: [
        { title: "AI Project Registry", content: "Managing your AI projects" },
        { title: "Model Nutrition Cards", content: "Creating and using model cards" },
        { title: "Vendor Portal", content: "Managing vendor relationships" },
        { title: "CAIVE Repository", content: "Understanding AI vulnerabilities" }
      ]
    },
    {
      title: "Workflows",
      items: [
        { title: "Clinical Workflows", content: "Healthcare-specific processes" },
        { title: "Compliance Templates", content: "Using built-in templates" },
        { title: "Custom Workflows", content: "Creating your own workflows" }
      ]
    },
    {
      title: "Integration",
      items: [
        { title: "API Documentation", content: "Integrating with your systems" },
        { title: "MLOps Integration", content: "Connecting with monitoring tools" },
        { title: "SharePoint Integration", content: "Document management" }
      ]
    }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <GiParachute className="brand-icon" /> Parachute
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/#pricing" className="nav-link">
            Pricing
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/docs" className="nav-link">
            Docs
          </Link>
        </div>
      </nav>

      <div className="docs-section">
        <div className="docs-header">
          <GiParachute className="docs-header-icon" />
          <h1>Documentation</h1>
          <p className="docs-subtitle">
            Everything you need to know about using Parachute
          </p>
        </div>

        <div className="docs-container">
          <div className="docs-sidebar">
            {sections.map((section, index) => (
              <div key={index} className="docs-sidebar-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="docs-content">
            {sections.map((section, index) => (
              <div key={index} className="docs-content-section">
                <h2>{section.title}</h2>
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    id={item.title.toLowerCase().replace(/\s+/g, '-')}
                    className="docs-item"
                  >
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    {/* Add more detailed content for each item */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs; 
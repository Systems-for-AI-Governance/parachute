import "./App.css";
// Import the GitHub icon from react-icons
import { FaGithub } from "react-icons/fa";
// Import parachute icon
import { GiParachute } from "react-icons/gi"; // Most literal parachute icon
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const testimonials = [
    {
      quote: "Very apt for the moment",
      author: "CMIO of major healthcare centre in NYC",
    },
    {
      quote:
        "Parachute's lifecycle management implementation is especially important as we look at a top down view of AI governance",
      author: "CIO of a major NYC healthcare provider",
    },
    {
      quote: "Great complement to the new ML monitoring tools we're deploying",
      author: "CIO of a major NYC healthcare provider",
    },
    {
      quote:
        "This system can be used not just for AI but to replace our old Jurassic GRC software.",
      author: "CIO of one of the largest academic medical centres in the US",
    },
    {
      quote: "So Needed",
      author: "CMIO of major healthcare centre in Boston",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const offerings = [
    {
      title: "Clinically-informed workflows",
      description:
        "Use Parachute to evaluate vendor solutions or develop solutions in-house using our clinically informed workflow toolkits based on state-of-the-art best practices like HAIP, NIST AI RMF, ISO 42001 and FDA SaMD. Use our up-to-date and ready-to-use compliance templates to enforce compliance with evolving regulatory requirements.",
    },
    {
      title: "AI Project registry",
      description:
        "Manage all your AI projects in one place with ease. Our AI Registry is precisely that - a centralized library that allows you to store all your ML models and AI systems, sort them by value or impact, track and prioritize their adoption.",
    },
    {
      title: "Model Nutrition Cards",
      description:
        "Communicate the value of each AI use case between teams, stakeholders, and executives using our model nutrition cards.",
    },
    {
      title: "Vendor Portal",
      description:
        "Simplifies the procurement process by streamlining the collection of AI risk-specific evidence from vendors. Our platform allows customers to track third-party AI systems in a centralized registry and apply our AI compliance packs to set thresholds and specific requirements. Vendors are then able to provide evidence of compliance via our portal.",
    },
  ];

  const whyParachutePoints = [
    "Enables Cross-functional Collaboration",
    "Healthcare-specific AI Control Towers Built on State-of-the-art frameworks",
    "Document Decisions",
    "Minimal manual entry (automate data entry through AI autofill assistants which link with your email and Sharepoint workflows)",
    "Records decisions taken during development and implementation of the tool",
    "Helps manage updates, decommissioning, and scaling",
    "Provides multiple checkpoints for ensuring validity of the AI solution",
    "Provides model cards and user manuals as a by-product to ensure appropriate use in keeping with ONC's HTI-1 DSI requirements",
    "Provides detailed audit trails and compliance workflows to meet evolving regulatory standards like FDA SaMD",
  ];

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
      <div className="testimonials-section">
        <h2>What Healthcare Leaders Are Saying</h2>
        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          <div className="testimonial-content">
            <p className="quote">"{testimonials[currentTestimonial].quote}"</p>
            <p className="author">
              - {testimonials[currentTestimonial].author}
            </p>
          </div>
          <button className="carousel-btn next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="offerings-section">
        <h2>Offering</h2>
        <div className="offerings-grid">
          {offerings.map((offering, index) => (
            <div key={index} className="offering-card">
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="why-parachute-section">
        <h2>Why Parachute?</h2>
        <div className="why-parachute-points">
          {whyParachutePoints.map((point, index) => (
            <div key={index} className="point">
              <GiParachute className="point-icon" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

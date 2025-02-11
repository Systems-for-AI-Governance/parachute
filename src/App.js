import "./App.css";
// Import the GitHub icon from react-icons
// import { FaGithub } from "react-icons/fa";
// Import parachute icon
import { GiParachute } from "react-icons/gi"; // Most literal parachute icon
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from './components/Blog';
import Navbar from './components/Navbar';

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

  const comparisonPoints = [
    {
      feature:
        "Link AI project to organizational priorities and identified problems",
      parachute: true,
      others: false,
    },
    {
      feature:
        "Engages clinical, administrative, and compliance teams, fostering transparency and cross-functional collaboration.",
      parachute: true,
      others: false,
    },
    {
      feature:
        "Records decisions taken during development and implementation of the tool",
      parachute: true,
      others: false,
    },
    {
      feature: "Helps manage updates, decommissioning, and scaling",
      parachute: true,
      others: false,
    },
    {
      feature:
        "Provides multiple checkpoints for ensuring validity of the AI solution",
      parachute: true,
      others: false,
    },
    {
      feature:
        "Provides model cards and user manuals as a by-product of the workflow to ensure appropriate use by end-users",
      parachute: true,
      others: false,
    },
    {
      feature:
        "Provides detailed audit trails and compliance workflows to meet evolving regulatory standards like SaMD and HTI-1",
      parachute: true,
      others: false,
    },
  ];

  const complementaryFeatures = [
    {
      category: "Primary Audience for Tool",
      parachute:
        "Clinicians, compliance team, privacy team, legal team, IT PMO, Vendors, Data scientists, etc.",
      mlOps: "Data Scientists, Clinicians",
    },
    {
      category: "Primary purpose of the tool",
      parachute:
        "Evaluate and track AI initiatives in order to ensure regulatory compliance",
      mlOps: "Monitor models for safety and accuracy",
    },
    {
      category: "Documentation",
      parachute:
        "Provides detailed documentation beyond just model performance (ex: equity considerations, allocation of liability between vendor and hospital etc.)",
      mlOps: "Limited to model performance monitoring",
    },
    {
      category: "Risk Management",
      parachute: {
        main: "Tracks and mitigates:",
        points: [
          "Non-technical risks such as bias, liability, and ethical concerns using workflow control towers.",
          "Technical risks (e.g., accuracy issues, data drift) and security risks (e.g., privilege escalation, unauthorized access, vulnerabilities) detected via seamless API integration with monitoring tools.",
        ],
      },
      mlOps:
        "Focuses on technical risks related to models (e.g., data drift, accuracy)",
    },
  ];

  const integrations = [
    { name: "Sharepoint", logo: "sharepoint.png" },
    { name: "Signal One", logo: "signal-one.png" },
    { name: "Email", logo: "email.png" },
    { name: "ServiceNow", logo: "servicenow.png" },
    { name: "MLFlow", logo: "mlflow.png" },
    { name: "DVC", logo: "dvc.png" },
    { name: "Microsoft Purview", logo: "purview.png" },
  ];

  // Double the integrations array for seamless infinite scroll
  const doubledIntegrations = [...integrations, ...integrations];

  return (
    <Router basename="/parachute">
      <Navbar />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={
          <div className="App">
            <div className="hero-section">
              <div className="hero-content">
                <GiParachute className="hero-icon" />
                <h1>Parachute</h1>
                <h2>
                  The World's First Open-Source AI Governance Platform for Healthcare.
                </h2>
                <div className="cta-buttons">
                  <a 
                    href="https://calendly.com/anv2127-columbia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn"
                    style={{ textDecoration: 'none' }}
                  >
                    Get Started
                  </a>
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
            <div className="comparison-section">
              <h2>Key differences Between Parachute and Other GRC Solutions</h2>

              <div className="comparison-table">
                <div className="comparison-header">
                  <div className="feature-header">Feature</div>
                  <div className="solution-header">Parachute</div>
                  <div className="solution-header">Other GRC Solutions</div>
                </div>

                {comparisonPoints.map((point, index) => (
                  <div key={index} className="comparison-row">
                    <div className="feature-cell">{point.feature}</div>
                    <div className="solution-cell">
                      {point.parachute ? (
                        <span className="check yes">YES</span>
                      ) : (
                        <span className="check no">NO</span>
                      )}
                    </div>
                    <div className="solution-cell">
                      {point.others ? (
                        <span className="check yes">YES</span>
                      ) : (
                        <span className="check no">NO</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="complementary-section">
              <h2>How Parachute complements Your Monitoring Tools</h2>

              <div className="complementary-table">
                <div className="complementary-header">
                  <div className="category-header">Feature</div>
                  <div className="tool-header">Parachute</div>
                  <div className="tool-header">ML/Ops monitoring Tools</div>
                </div>

                {complementaryFeatures.map((feature, index) => (
                  <div key={index} className="complementary-row">
                    <div className="category-cell">{feature.category}</div>
                    <div className="tool-cell">
                      {typeof feature.parachute === "string" ? (
                        feature.parachute
                      ) : (
                        <div>
                          <p>{feature.parachute.main}</p>
                          <ul>
                            {feature.parachute.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="tool-cell">{feature.mlOps}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="integrations-section">
              <h2>Integrations</h2>
              <div className="integrations-container">
                <div className="scroll-container">
                  {doubledIntegrations.map((integration, index) => (
                    <div key={index} className="integration-item">
                      {/* Fallback to name if logo isn't available */}
                      <div className="integration-content">
                        <span className="integration-name">{integration.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pricing-section" id="pricing">
              <h2>Pricing</h2>
              <div className="pricing-container">
                {/* Community License Card */}
                <div className="pricing-card free">
                  <div className="pricing-header">
                    <h3>Community License</h3>
                    <div className="price">Free</div>
                    <div className="license-type">Open Source License</div>
                  </div>

                  <div className="pricing-features">
                    <h4>Core Features:</h4>
                    <ul>
                      <li>Core governance software</li>
                      <li>Compliance templates</li>
                      <li>Collaboration toolkits</li>
                      <li>Basic documentation</li>
                      <li>Community support</li>
                      <li>Manual workflows</li>
                    </ul>

                    <h4>Purpose:</h4>
                    <p>
                      Ensure accessibility for organizations to adopt the platform for
                      manual workflows and collaboration.
                    </p>

                    <h4>License:</h4>
                    <p>
                      Distributed under a permissive open-source license (Apache 2.0
                      or MIT)
                    </p>
                    <p className="exclusion-note">
                      *Excludes AI tools and MLOps adapters
                    </p>
                  </div>

                  <a 
                    href="https://calendly.com/anv2127-columbia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-cta"
                    style={{ textDecoration: 'none' }}
                  >
                    Get Started
                  </a>
                </div>

                {/* Commercial License Card */}
                <div className="pricing-card premium">
                  <div className="pricing-header">
                    <h3>Commercial License</h3>
                    <div className="price">Paid Add-Ons</div>
                    <div className="license-type">Enterprise Features</div>
                  </div>

                  <div className="pricing-features">
                    <h4>Everything in Community, plus:</h4>
                    <div className="addon-feature">
                      <h4>Automated Data Entry (AI Tools)</h4>
                      <div className="addon-price">$100/project</div>
                      <ul>
                        <li>Automates data entry tasks</li>
                        <li>Reduces manual input</li>
                        <li>Improves accuracy</li>
                        <li>API access or downloadable plugin</li>
                      </ul>
                    </div>

                    <div className="addon-feature">
                      <h4>MLOps Integration</h4>
                      <div className="addon-price">Custom pricing</div>
                      <ul>
                        <li>Connects MLOps platforms</li>
                        <li>Automatic metrics updates</li>
                        <li>Project thresholds tracking</li>
                        <li>Enterprise integration support</li>
                      </ul>
                    </div>
                  </div>

                  <a 
                    href="https://calendly.com/anv2127-columbia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-cta"
                    style={{ textDecoration: 'none' }}
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

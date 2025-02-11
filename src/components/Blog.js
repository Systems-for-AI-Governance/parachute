import { FaGithub } from "react-icons/fa";
import { GiParachute } from "react-icons/gi";
import { Link } from "react-router-dom";
import BlogPost from './BlogPost';
import Navbar from './Navbar';
import { useState } from 'react';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  
  const blogPosts = [
    {
      title: "Why AI needs specialized governance",
      date: "January 10, 2025",
      excerpt: "The case for AI governance in healthcare",
      author: "Aria Vikram",
      readTime: "7 min read",
      content: `
        <div class="blog-content">
          <p>AI is revolutionizing healthcare, with nearly 1,000 FDA-cleared medical devices incorporating AI.</p>
          
          <p>However, widespread adoption faces significant barriers, including patient safety, privacy, security, bias, transparency, and compliance. AI outputs are stochastic, and regulations are rapidly evolving.</p>
          <h2>Millions of Dollars of Fines Await!</h2>
         <p> Upcoming AI regulations carry significant legal ramifications that could cripple non-compliant healthcare providers. </p>
          
          <ul>
            <li><strong>ONC HTI-1:</strong> Enforces strict algorithmic transparency, requiring hospitals to document AI decision-making or face penalties of up to $1 million per violation.</li>
            <li><strong>Colorado AI Act & CA Bill #3030:</strong> Imposes civil liability for AI-driven harm. If an AI misdiagnoses a patient, hospitals could face multimillion-dollar lawsuits, potentially leading to bankruptcies.</li>
            <li><strong>NYC's upcoming AI Regulations:</strong> Includes over 60 pending bills targeting AI.</li>
            <li><strong>EU AI Act:</strong> Classifies most healthcare AI as 'high-risk,' mandating continuous monitoring, failure reports, and compliance with stringent safety standards. Noncompliance can result in penalties of up to 6% of global revenue, a catastrophic financial burden for healthcare institutions.</li>
          </ul>

          <p>These mounting costs make AI governance an existential concern for hospitals, with the potential to cripple organizations that fail to comply. Noncompliance with any of these could lead to lawsuits, loss of accreditation, and multimillion-dollar regulatory fines, making AI governance not just a best practice but a legal necessity.</p>

          <p>The FTC has also said that "there is no AI exemption from the laws on the books" — existing laws such as HIPAA and the Affordable Care Act (ACA) fully apply, each carrying severe financial penalties for noncompliance:</p>

          <p>These monetary repercussions make AI compliance not just a regulatory issue, but a critical financial imperative. Consequently, healthcare remains one of the slowest industries to implement AI solutions.</p>

          <p>The FDA has reinforced that AI is not exempt from regulatory scrutiny. Commissioner Robert Califf has emphasized:</p>

          <blockquote>
            "When you produce a drug or a traditional device, it's the same thing for the rest of its existence. Here, the decision support, the AI algorithms are changing every day. The real key is making sure they're safe at the beginning and then monitoring them."
            <cite>- FDA Commissioner Robert Califf</cite>
          </blockquote>

          <p>This underscores a critical challenge: AI in healthcare evolves dynamically, necessitating continuous oversight rather than a one-time approval process. The FDA's approach aligns AI with medical device regulations, requiring adherence to existing legal and safety frameworks without special carve-outs.</p>

          <h2>The Governance Gap in Hospitals</h2>
          <p>Hospitals currently lack the legal and technical infrastructure required to safely and effectively deploy AI at the point of care. This absence of governance directly impacts patient safety, trust, and the adoption of innovations that could transform healthcare outcomes.</p>

          <p>For hospital administrators, AI promises faster diagnoses, personalized treatment, and operational efficiency. However, these benefits are overshadowed by liability concerns: If an AI system misdiagnoses a patient or provides a harmful recommendation, who is accountable—the hospital, the physician, or the AI developer? This uncertainty leaves hospitals hesitant to embrace AI, even when the technology demonstrates life-saving potential.</p>

          <h2>New Liability Risks Are Arising</h2>
          <p>The risks of inadequate AI governance are evident in landmark cases like Samson vs. Heartwise. Heartwise, an AI-powered diagnostic tool, misinterpreted patient data, recommending a non-urgent course of action for Samson, a patient exhibiting early signs of a heart attack. The delay in appropriate treatment led to Samson's death, and the resulting legal battle exposed:</p>

          <ul>
            <li>Lack of validation and testing before deployment</li>
            <li>Poor communication of AI system limitations to clinicians</li>
            <li>Gaps in accountability between the hospital and the AI vendor</li>
          </ul>

          <p>Clinicians are not AI experts, yet they are increasingly expected to rely on AI-generated insights without clear guidelines on:</p>
          <ul>
            <li>When AI outputs should be trusted</li>
            <li>When human oversight is essential</li>
            <li>What the AI's limitations are</li>
          </ul>

          <p>Without governance enforcing education, transparency, and oversight, hospitals risk using AI as an unchecked authority, leading to misdiagnoses, patient harm, and legal liability.</p>

          <h2>The Case of OpenAI's Whisper</h2>
          <p>OpenAI's Whisper transcription tool failed dramatically under scrutiny, fabricating content in nearly all 26,000 test transcriptions. Despite OpenAI's explicit warning against its use in "high-risk domains" like healthcare, over 30,000 medical professionals have adopted it.</p>

          <p>What happens when a doctor unknowingly acts on fabricated medical history or incorrect symptoms transcribed by Whisper? Without governance ensuring proper validation, monitoring, and human review, these mistakes become untraceable risks buried in a patient's record.</p>

          <p>Healthcare requires absolute fidelity to the original data—yet AI systems, as seen with Nabla's implementation of Whisper, not only confabulate (invent false details) but also reportedly erase original audio recordings for "data safety reasons." This poses a significant risk for deaf patients who have no idea what their physician actually said.</p>

          <h3>Critical Accountability Issues:</h3>
          <ul>
            <li>The original conversation is lost forever.</li>
            <li>There is no way to verify whether the AI's transcription was accurate.</li>
            <li>The AI-generated record becomes the sole source of truth, even when it's wrong.</li>
          </ul>

          <h2>AI + Interoperability = Security Nightmare</h2>
          <p>Integrating AI into healthcare systems isn't just about functionality—it's about security. AI systems introduce new attack surfaces that hospitals are unprepared to defend.</p>

          <p>Consider Microsoft's AI-powered healthcare chatbot, which was found to be vulnerable to privilege escalation attacks. A bad actor could exploit AI-driven interoperability to:</p>
          <ul>
            <li>Gain unauthorized access to medical records</li>
            <li>Manipulate AI-generated diagnoses</li>
            <li>Inject misinformation into patient histories</li>
          </ul>

          <p>AI governance must establish strict access controls, audit logs, and security protocols to prevent AI from becoming the weakest link in hospital cybersecurity.</p>

          <h2>AI Needs Specialized Oversight</h2>
          <p>AI is not like other software. It is dynamic, self-updating, and probabilistic—meaning it requires a new governance model tailored to:</p>
          <ul>
            <li>Continuous monitoring for errors, biases, and security vulnerabilities</li>
            <li>Clinician training on AI's limitations and appropriate use</li>
            <li>Compliance with evolving regulations on AI use in critical healthcare applications</li>
          </ul>

          <p>Without specialized AI governance, healthcare AI will continue to operate as a high-risk experiment on real patients—one where mistakes cannot be undone.</p>

          <h2>Introducing Parachute: AI Governance for Healthcare</h2>
          <p>Parachute is the world's first open-source AI governance tool that helps healthcare providers evaluate, develop, deploy, and monitor AI solutions at the point of care while ensuring regulatory compliance. Our platform offers:</p>

          <ul>
            <li><strong>Clinically-Informed Workflows</strong> – Leverages state-of-the-art best practices (HAIP, NIST AI RMF, ISO 42001, FDA SaMD) to ensure compliance. Customizable templates enforce evolving regulations while AI agents reduce manual documentation by pre-filling compliance forms.</li>
            <li><strong>AI Project Registry</strong> – A centralized library to track, prioritize, and manage all AI models and systems, ensuring value-driven adoption.</li>
            <li><strong>Model Nutrition Cards</strong> – Helps organizations comply with ONC HTI-1 algorithmic transparency rules while clearly communicating AI model capabilities and limitations to teams and stakeholders.</li>
            <li><strong>Vendor Portal</strong> – Simplifies procurement by collecting AI risk-specific evidence from vendors. AI agents vet compliance documentation, ensuring ONC HTI-1's 31 key attributes are properly supported.</li>
            <li><strong>CAIVE (Common AI Vulnerabilities and Exposures)</strong> – A centralized repository of common issues in AI models relevant to healthcare, modeled after CVE, allowing hospitals to share critical AI failure cases (e.g., common drug name transcription errors in ambient AI systems).</li>
          </ul>

          <h3>Parachute Unifies AI Governance Efforts at Hospitals:</h3>
          <ul>
            <li><strong>Cross-Functional Collaboration</strong> – Facilitates seamless teamwork across departments to ensure comprehensive AI governance.</li>
            <li><strong>Healthcare-Specific AI Control Towers</strong> – Built on state-of-the-art frameworks, our control towers provide oversight tailored to healthcare applications.</li>
            <li><strong>Automated Documentation</strong> – Minimizes manual entry by automating data input through AI autofill assistants that integrate with email, SharePoint, and monitoring tools like Seismometer.</li>
            <li><strong>Multiple Validation Checkpoints</strong> – Offers numerous checkpoints to ensure the validity and reliability of AI solutions.</li>
            <li><strong>Comprehensive Audit Trails</strong> – Helps prevent claims of negligence from litigators and regulators.</li>
            <li><strong>Regulatory Compliance & Risk Management</strong> – Ensures adherence to evolving standards like FDA SaMD, HIPAA, and ONC's HTI-1 requirements.</li>
          </ul>

          <p>Parachute empowers hospitals to deploy AI responsibly, ensuring patient safety, regulatory compliance, and trust in medical AI systems.</p>
        </div>
      `
    },
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  if (selectedPost) {
    return (
      <>
        <Navbar />
        <BlogPost post={selectedPost} />
      </>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div className="blog-list-section">
        <div className="blog-list-header">
          <GiParachute className="blog-header-icon" />
          <h1>Parachute Blog</h1>
          <p className="blog-subtitle">
            Insights and updates on AI governance in healthcare
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-card-content">
                <h2>{post.title}</h2>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-author">By {post.author}</div>
                <button 
                  className="blog-read-more primary-btn"
                  onClick={() => handleReadMore(post)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
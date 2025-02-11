import { Link } from "react-router-dom";
import { GiParachute } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <GiParachute className="brand-icon" /> Parachute
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link 
          to="/#pricing" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            // If not on home page, navigate to home page first
            if (window.location.pathname !== '/parachute/') {
              window.location.href = '/parachute/#pricing';
            } else {
              document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Pricing
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 
import { Link } from 'react-router-dom';
import './Affiliates.css';

const Affiliates = () => {
  return (
    <div className="affiliates-bg">
      <nav className="navbar">
        <Link to="/" className="logo">The Gym Cheat Sheet</Link>
        <div className="nav-links">
          <Link to="/affiliates">Affiliates</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      
      <div className="affiliates-content">
        <div className="affiliates-card">
          <h1 className="affiliates-title">Affiliate Program</h1>
          
          <div className="affiliate-info">
            <div className="info-section">
              <h2>Join Our Affiliate Program</h2>
              <p>
                Are you passionate about fitness and helping others achieve their goals? 
                Join our affiliate program and earn money while sharing The Gym Cheat Sheet 
                with your network.
              </p>
            </div>
            
            <div className="benefits-section">
              <h3>What You'll Earn</h3>
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <div className="benefit-text">
                  <strong>Percentage of Each Sale</strong>
                  <p>Earn a competitive percentage from every successful referral you make.</p>
                </div>
              </div>
            </div>
            
            <div className="how-to-apply">
              <h3>How to Apply</h3>
              <p>
                Interested in becoming an affiliate? Apply for an affiliate position by contacting:
              </p>
              <div className="contact-info">
                <a 
                  href="mailto:izuogudante@gmail.com" 
                  className="apply-btn"
                >
                  📧 izuogudante@gmail.com
                </a>
              </div>
              <p className="apply-note">
                Include a brief introduction about yourself and why you'd be a great affiliate partner.
              </p>
            </div>
          </div>
          
          <div className="back-link">
            <Link to="/" className="back-btn">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;

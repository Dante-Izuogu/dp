import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-bg">
      <nav className="navbar">
        <Link to="/" className="logo">The Gym Cheat Sheet</Link>
        <div className="nav-links">
          <Link to="/affiliates">Affiliates</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/form" className="form-nav-btn">Form</Link>
        </div>
      </nav>
      
      <div className="contact-content">
        <div className="contact-card">
          <h1 className="contact-title">Contact Information</h1>
          
          <div className="contact-info">
            <p className="contact-intro">
              Have questions about The Gym Cheat Sheet? Need support with your purchase? 
              Get in touch with me using any of the methods below.
            </p>
            
            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <strong>Email</strong>
                  <a href="mailto:izuogudante@gmail.com" className="contact-link">
                    izuogudante@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <strong>Phone</strong>
                  <a href="tel:+447871601704" className="contact-link">
                    07871 601704
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📸</div>
                <div className="contact-details">
                  <strong>Instagram</strong>
                  <a 
                    href="https://instagram.com/dante.izuogu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                  >
                    @dante.izuogu
                  </a>
                </div>
              </div>
              
              <div className="contact-item whatsapp-item">
                <div className="contact-icon">💬</div>
                <div className="contact-details">
                  <strong>WhatsApp</strong>
                  <a 
                    href="https://wa.me/447871601704" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link whatsapp-link"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="response-time">
              <p>
                <strong>Response Time:</strong> I typically respond within 24 hours. 
                For urgent inquiries, WhatsApp is the fastest way to reach me.
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

export default Contact;

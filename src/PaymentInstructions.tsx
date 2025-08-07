import { useSearchParams, Link } from 'react-router-dom';
import './PaymentInstructions.css';

const PaymentInstructions = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const isPersonalised = type === 'personalised';
  
  const paymentLink = isPersonalised 
    ? 'https://monzo.me/danteizuogu/15.00?d=Personalised+Cheat+Sheet&h=civblQ'
    : 'https://monzo.me/danteizuogu/10.00?d=ENTER+EMAIL+ADDRESS+AS+REFERENCE&h=civblQ';

  const productName = isPersonalised ? 'Personalised Cheat Sheet' : 'General Cheat Sheet';
  const price = isPersonalised ? '£15' : '£10';

  return (
    <div className="payment-instructions-bg">
      <nav className="navbar">
        <Link to="/" className="logo">The Gym Cheat Sheet</Link>
        <div className="nav-links">
          <Link to="/affiliates">Affiliates</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      
      <div className="payment-content">
        <div className="payment-card">
          <h1 className="payment-title">Complete Your Purchase</h1>
          <div className="product-info">
            <h2>{productName}</h2>
            <div className="price-display">{price}</div>
          </div>
          
          <div className="payment-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Pay via Payment Link</h3>
                <p>Click the link below to complete your payment securely:</p>
                <a 
                  href={paymentLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="payment-link-btn"
                >
                  Pay {price} Now
                </a>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Message on WhatsApp</h3>
                <p>After payment, message me with:</p>
                <ul className="requirements-list">
                  <li>Your email address</li>
                  <li>The person who referred you (if any)</li>
                </ul>
                <a 
                  href="https://wa.me/447871601704" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  📱 WhatsApp: 07871 601704
                </a>
              </div>
            </div>
          </div>
          
          <div className="warnings-section">
            <div className="warning">
              <div className="warning-icon">⚠️</div>
              <div className="warning-content">
                <p>Partial payments will not act as a purchase and will not be refunded.</p>
              </div>
            </div>
            
            <div className="warning">
              <div className="warning-icon">⚠️</div>
              <div className="warning-content">
                <p>Completing the form without paying is just a waste of your own time.</p>
              </div>
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

export default PaymentInstructions;

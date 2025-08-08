import { Link } from 'react-router-dom';
import './App.css';

const testimonials = [
  {
    name: 'Brayden S.',
    comment: '"This made starting the gym so much easier."',
    rating: 5
  },
  {
    name: 'Jake T.',
    comment: '"Super clear, no BS, just what I needed."',
    rating: 5
  },
  {
    name: 'Alex M.',
    comment: '"I wish I had this when I started out."',
    rating: 5
  }
];

const faqs = [
  {
    q: 'What makes this better than free plans?',
    a: 'No fluff, no confusion. Just the essentials you need to get results, fast. Designed for clarity and real progress.'
  },
  {
    q: 'How is the personalised version different?',
    a: 'You fill in a quick form, and we tailor the cheat sheet to your goals, schedule, and experience. Delivered to your inbox within 24 hours.'
  },
  {
    q: 'Is it beginner-friendly?',
    a: 'Absolutely! It\'s made for anyone who wants to get results without the overwhelm.'
  }
];

function App() {
  return (
    <div className="main-bg">
      <nav className="navbar">
        <div className="logo">The Gym Cheat Sheet</div>
        <div className="nav-links">
          <Link to="/affiliates">Affiliates</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/form" className="form-nav-btn">Form</Link>
        </div>
      </nav>
      <div className="main-content">
        <header className="header-section">
          <h1 className="headline">Your Shortcut to Smarter Gains</h1>
          <p className="subheading">A clean, easy-to-follow PDF that gives you everything you need to start seeing results in the gym – without the fluff.</p>
        </header>
        <section className="purchase-section" id="buy">
          <div className="purchase-options">
            <div className="option-card">
              <div className="option-title">General Cheat Sheet</div>
              <div className="option-price">£10</div>
              <div className="option-desc">PDF sent by mail within 12 hours of purchase</div>
              <Link to="/payment?type=general" className="pay-btn">Buy Now</Link>
            </div>
            <div className="option-card">
              <div className="option-title">Personalised Cheat Sheet</div>
              <div className="option-price">£15</div>
              <div className="option-desc">Fill in a form, cheat sheet delivered within 24 hours</div>
              <Link to="/payment?type=personalised" className="pay-btn">Get Yours</Link>
            </div>
          </div>
        </section>
        <section className="testimonial-section" id="testimonials">
          <h2 className="section-title">What Others Are Saying</h2>
          <div className="testimonials">
            {testimonials.map((testimonial, i) => (
              <div className="testimonial" key={i}>
                <div className="testimonial-header">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <div className="testimonial-stars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                </div>
                <div className="testimonial-comment">{testimonial.comment}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="faq-section" id="faq">
          <h2 className="section-title">FAQ</h2>
          {faqs.map((faq, i) => (
            <div className="faq" key={i}>
              <div className="faq-q">{faq.q}</div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </section>
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} The Gym Cheat Sheet. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

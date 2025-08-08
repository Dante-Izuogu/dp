import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    deadline: '',
    onBudget: false,
    gymDays: 3,
    otherInfo: '',
    hasAllergies: false,
    allergies: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'radio') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      gymDays: parseInt(e.target.value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xblkparr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: formData.age,
          weight: `${formData.weight} kg`,
          height: `${formData.height} cm`,
          goal: formData.goal,
          deadline: formData.deadline,
          onBudget: formData.onBudget ? 'Yes' : 'No',
          gymDays: `${formData.gymDays} days per week`,
          otherInfo: formData.otherInfo,
          allergies: formData.hasAllergies ? formData.allergies : 'No allergies'
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your form has been submitted successfully. We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          age: '',
          weight: '',
          height: '',
          goal: '',
          deadline: '',
          onBudget: false,
          gymDays: 3,
          otherInfo: '',
          hasAllergies: false,
          allergies: ''
        });
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="form-bg">
      <nav className="navbar">
        <Link to="/" className="logo">The Gym Cheat Sheet</Link>
        <div className="nav-links">
          <Link to="/affiliates">Affiliates</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/form" className="form-nav-btn">Form</Link>
        </div>
      </nav>
      
      <div className="form-content">
        <div className="form-card">
          <h1 className="form-title">Personalised Cheat Sheet Form</h1>
          <p className="form-subtitle">
            Fill out this form to get your personalised gym cheat sheet delivered within 24 hours.
          </p>
          
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
              {submitMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="gym-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="13"
                  max="100"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="weight">Weight (kg) *</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  min="30"
                  max="300"
                  step="0.1"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="height">Height (cm) *</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  min="100"
                  max="250"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>What is your goal? *</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="goal"
                    value="gain weight"
                    checked={formData.goal === 'gain weight'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>Gain Weight</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="goal"
                    value="lose weight"
                    checked={formData.goal === 'lose weight'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>Lose Weight</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="goal"
                    value="maintain weight"
                    checked={formData.goal === 'maintain weight'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>Maintain Weight</span>
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="deadline">When do you want to achieve this by? *</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="toggle-label">
                <span>Are you on a budget?</span>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    name="onBudget"
                    checked={formData.onBudget}
                    onChange={handleInputChange}
                  />
                  <span className="toggle-slider"></span>
                </div>
                <span className="toggle-text">{formData.onBudget ? 'Yes' : 'No'}</span>
              </label>
            </div>
            
            <div className="form-group">
              <label htmlFor="gymDays">How many days a week are you willing to go to the gym? *</label>
              <div className="slider-container">
                <input
                  type="range"
                  id="gymDays"
                  name="gymDays"
                  min="1"
                  max="7"
                  value={formData.gymDays}
                  onChange={handleSliderChange}
                  className="gym-days-slider"
                />
                <div className="slider-value">{formData.gymDays} day{formData.gymDays !== 1 ? 's' : ''}</div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="otherInfo">Other Information</label>
              <textarea
                id="otherInfo"
                name="otherInfo"
                value={formData.otherInfo}
                onChange={handleInputChange}
                placeholder="e.g., I find it really difficult to gain muscle, I have a previous injury, etc."
                rows={4}
              />
            </div>
            
            <div className="form-group">
              <label className="toggle-label">
                <span>Do you have any allergies?</span>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    name="hasAllergies"
                    checked={formData.hasAllergies}
                    onChange={handleInputChange}
                  />
                  <span className="toggle-slider"></span>
                </div>
                <span className="toggle-text">{formData.hasAllergies ? 'Yes' : 'No'}</span>
              </label>
            </div>
            
            {formData.hasAllergies && (
              <div className="form-group">
                <label htmlFor="allergies">Please specify your allergies *</label>
                <textarea
                  id="allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  placeholder="e.g., nuts, dairy, shellfish, etc."
                  rows={3}
                  required={formData.hasAllergies}
                />
              </div>
            )}
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Form'}
            </button>
          </form>
          
          <div className="payment-warning-notice">
            <div className="warning-icon">⚠️</div>
            <div className="warning-content">
              <p>
                <strong>Important:</strong> This form is for the personalised cheat sheet service. 
                Your form will only be processed after payment is completed. Forms submitted 
                without payment will not receive a response.
              </p>
              <Link to="/payment?type=personalised" className="payment-link">
                Complete Payment (£15) →
              </Link>
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

export default Form;

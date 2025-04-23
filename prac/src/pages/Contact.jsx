import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString()
    };
    
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    setStatus('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };
  
  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Contact Our Team</h1>
          <p style={styles.heroSubtitle}>We're here to help you with any questions</p>
        </div>
      </section>
      
      <div style={styles.contactContainer}>
        
        <div style={styles.contactInfo}>
          <h2 style={styles.contactTitle}>Get In Touch</h2>
          
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <h3 style={styles.infoTitle}>Email</h3>
              <p>info@headphoneshop.example</p>
            </div>
            
            <div style={styles.infoItem}>
              <h3 style={styles.infoTitle}>Phone</h3>
              <p>+91 (44) 4567-8901</p>
            </div>
            
            <div style={styles.infoItem}>
              <h3 style={styles.infoTitle}>Address</h3>
              <p>123 Tech Park, Sholinganallur, Chennai, Tamil Nadu 600119</p>
            </div>
          </div>
        </div>
        
        
        <div style={styles.contactForm}>
          <h2 style={styles.formTitle}>Send us a Message</h2>
          
          {status && (
            <div style={styles.statusMessage}>
              {status}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={styles.textarea}
              ></textarea>
            </div>
            
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    background: 'linear-gradient(90deg, #377DFF 0%, #4F8CFF 100%)',
    color: 'white',
    padding: '3rem 1rem',
    borderRadius: '8px',
    marginBottom: '2rem',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
  },
  contactContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  contactInfo: {
    marginBottom: '2rem',
  },
  contactTitle: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  infoGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  infoItem: {
    flex: 1,
    minWidth: '200px',
    textAlign: 'center',
    padding: '1rem',
  },
  infoTitle: {
    marginBottom: '0.5rem',
  },
  contactForm: {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
  },
  formTitle: {
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    resize: 'vertical',
    fontSize: '1rem',
  },
  submitButton: {
    background: '#377DFF',
    color: 'white',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
  },
  statusMessage: {
    padding: '0.75rem',
    marginBottom: '1.5rem',
    background: '#d4edda',
    color: '#155724',
    borderRadius: '4px',
    textAlign: 'center',
  },
};

export default Contact;

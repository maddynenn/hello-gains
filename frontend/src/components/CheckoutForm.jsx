import { useState } from 'react';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: '',
    country: '',
    zip: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Card must be 16 digits';
    }
    if (!formData.expiry.match(/^\d{2}\/\d{2}$/)) {
      newErrors.expiry = 'Format: MM/YY';
    }
    if (!formData.cvc.match(/^\d{3,4}$/)) {
      newErrors.cvc = 'Invalid CVC';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Name required';
    }
    if (!formData.zip.trim()) {
      newErrors.zip = 'ZIP required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log('Payment submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const styles = {
    container: {
      maxWidth: '448px',
      margin: '0 auto',
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px'
    },
    formGroup: {
      marginBottom: '16px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '4px'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none'
    },
    error: {
      color: '#ef4444',
      fontSize: '12px',
      marginTop: '4px'
    },
    row: {
      display: 'flex',
      gap: '16px'
    },
    flex1: {
      flex: '1'
    },
    button: {
      width: '100%',
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '12px',
      borderRadius: '6px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>
      <div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            placeholder="you@example.com"
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            style={styles.input}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
          />
          {errors.cardNumber && <p style={styles.error}>{errors.cardNumber}</p>}
        </div>

        <div style={{...styles.row, ...styles.formGroup}}>
          <div style={styles.flex1}>
            <label style={styles.label}>Expiry</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              style={styles.input}
              placeholder="MM/YY"
              maxLength="5"
            />
            {errors.expiry && <p style={styles.error}>{errors.expiry}</p>}
          </div>
          <div style={styles.flex1}>
            <label style={styles.label}>CVC</label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              style={styles.input}
              placeholder="123"
              maxLength="4"
            />
            {errors.cvc && <p style={styles.error}>{errors.cvc}</p>}
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Cardholder Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="John Doe"
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={{...styles.row, ...styles.formGroup}}>
          <div style={styles.flex1}>
            <label style={styles.label}>Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
            </select>
          </div>
          <div style={styles.flex1}>
            <label style={styles.label}>ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              style={styles.input}
              placeholder="12345"
            />
            {errors.zip && <p style={styles.error}>{errors.zip}</p>}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);


  const provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 
    'Prince Edward Island', 'Quebec', 'Saskatchewan'
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedData({
      email,
      fullName,
      address,
      address2,
      city,
      province,
      postalCode
    });
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className='form-row-full'>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className='form-row-full'>
          <label>Address 2:</label>
          <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Apartment, studio, or floor" />
        </div>
        <div className='form-row-triple'>
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div>
        <label>Province:</label>
          <select value={province} onChange={(e) => setProvince(e.target.value)} required>
            <option value="">Choose...</option>
            {provinces.map((prov, index) => (
              <option key={index} value={prov}>{prov}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Postal Code:</label>
          <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
        </div>
        </div>
        <div className='form-row-full'>
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            Agree to Terms & Conditions?
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>Address 2: {submittedData.address2}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;






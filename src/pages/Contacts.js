import React, { useState } from 'react';
import './StyleCon.css'

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSaveProfile = (event) => {
    event.preventDefault();
   
    const formData = {
      name: name,
      email: email,
      phone: phone,
      address: address
    }
    
    alert(`Данные профиля: ${JSON.stringify(formData)}`);
  }

  return (
    <div className="profile">
      <h1 className='likab'>Personai Area</h1>
      <form onSubmit={handleSaveProfile}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group additional-fields">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <div className="form-group additional-fields">
          <label htmlFor="address">adres:</label>
          <input type="text" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} />
        </div>
        <button type="button" id="edit-profile-btn">Edit profile</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Contacts;
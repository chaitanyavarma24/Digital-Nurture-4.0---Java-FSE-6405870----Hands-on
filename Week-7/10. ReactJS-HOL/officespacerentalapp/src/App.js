import React from 'react';
import './App.css';

function App() {
  

  // Other office listings
  const offices = [
    {
      name: 'Varma Spaces',
      rent: 62000,
      address: 'Governorpet, Vijayawada',
      image: 'https://wallpapers.com/images/hd/office-pictures-l1uenky9l8d29djp.jpg'
    },
    {
      name: 'Bhanu Towers',
      rent: 45000,
      address: 'Benz Circle, Vijayawada',
      image: 'https://virtualbackgrounds.site/wp-content/uploads/2020/08/office-with-a-garden-view.jpg'
    },
    {
      name: 'Chaitanya Elite',
      rent: 70000,
      address: 'Moghalrajpuram, Vijayawada',
      image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'left' }}>
      <h1>Office Space , at Affordable range</h1>

      
      {offices.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <img src={item.image} alt={item.name} width="300" />
          <p><strong>Name:</strong> {item.name}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
              ₹{item.rent}
            </span>
          </p>
          <p><strong>Address:</strong> {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

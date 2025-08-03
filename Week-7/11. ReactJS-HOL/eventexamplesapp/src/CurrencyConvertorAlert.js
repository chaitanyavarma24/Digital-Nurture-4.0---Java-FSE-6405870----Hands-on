import React, { useState } from 'react';

function CurrencyConvertorAlert() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount');
      return;
    }

    const rates = {
      EUR: 91,
      USD: 80,
    };

    const upperCurrency = currency.toUpperCase();

    if (!rates[upperCurrency]) {
      alert('Unsupported currency. Please enter EUR or USD.');
      return;
    }

    const result = (parseFloat(amount) * rates[upperCurrency]).toFixed(2);
    alert(`Converting to ${upperCurrency}: ₹${result}`);
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>

      <div style={{ textAlign: 'left', marginBottom: '10px' }}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div style={{ textAlign: 'left', marginBottom: '10px' }}>
        <label>Currency:</label>
        <textarea
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CurrencyConvertorAlert;

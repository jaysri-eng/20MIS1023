import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await fetch('http://localhost:3000/average', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numbers: numbers.split(',').map(Number) }),
      });
      const data = await response.json();
      setAverage(data.average);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {average !== null && <p>Average: {average}</p>}
    </div>
  );
}

export default Calculator;

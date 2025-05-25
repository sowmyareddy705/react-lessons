// App13.jsx
import React, { useState, useEffect } from 'react';

const App13 = () => {
  const [number, setNumber] = useState(10);
  const [addition, setAddition] = useState(0);
  const [subtraction, setSubtraction] = useState(0);
  const [multiplication, setMultiplication] = useState(0);
  const [division, setDivision] = useState(0);

  useEffect(() => {
    setAddition(100 + Number(number));
    setSubtraction(100 - Number(number));
    setMultiplication(100 * Number(number));
    setDivision(Number(number) !== 0 ? 100 / Number(number) : '∞');
  }, [number]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>App13</h2>
      <h3>Assignment</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div style={boxStyle}>
          <strong>Addition</strong><br />
          100 + {number} = {addition}
        </div>
        <div style={boxStyle}>
          <strong>Subtraction</strong><br />
          100 - {number} = {subtraction}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label>
          input type=number <br />
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={boxStyle}>
          <strong>Multiplication</strong><br />
          100 * {number} = {multiplication}
        </div>
        <div style={boxStyle}>
          <strong>Division</strong><br />
          100 / {number} = {division}
        </div>
      </div>
    </div>
  );
};

const boxStyle = {
  border: '2px solid black',
  padding: '15px',
  width: '180px',
  textAlign: 'center',
  fontSize: '16px',
};

export default App13;
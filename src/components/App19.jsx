import React, { useState, useEffect } from 'react';

function App19() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (wicket >= 10) {
      setMessage('Game Over!');
    } else if (run > 0) {
      setMessage('Well Done!');
    } else if (wicket > 0) {
      setMessage('Better Luck Next Time!');
    } else {
      setMessage('');
    }
  }, [run, wicket]);

  const handleRun = () => {
    if (wicket < 10) {
      setRun(prevRun => prevRun + 1);
    }
  };

  const handleWicket = () => {
    if (wicket < 10) {
      setWicket(prevWicket => prevWicket + 1);
    }
  };

  // Styles
  const containerStyle = {
    padding: '30px',
    fontFamily: 'Arial',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#0047AB', // dark blue
    marginBottom: '30px',
  };

  const boxContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    marginTop: '40px',
  };

  const boxStyle = {
    border: '2px solid black',
    padding: '20px',
    borderRadius: '20px',
    width: '200px',
  };

  const messageBoxStyle = {
    ...boxStyle,
    width: '250px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>App19</h2>
      <h3>Assignment</h3>
      <div style={titleStyle}>Cricket Scoreboard</div>

      <div style={boxContainerStyle}>
        <div style={boxStyle}>
          <h2>{run}</h2>
          <button onClick={handleRun} style={buttonStyle}>Run</button>
          <h2>{wicket}</h2>
          <button onClick={handleWicket} style={buttonStyle}>Wicket</button>
        </div>

        <div style={messageBoxStyle}>
          <h3>{message}</h3>
        </div>
      </div>
    </div>
  );
}

export default App19;
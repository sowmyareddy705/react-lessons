import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App22() {
  const [tmp, setTmp] = useState();

  const fetchWeather = async () => {
    const res = await axios.get("http://localhost:8080/weather");
    setTmp(res.data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div style={{ backgroundColor: 'pink', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        backgroundColor: '#add8e6', // light blue
        padding: '20px 40px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontSize: '1.5rem',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        ☁️ {tmp}
      </div>
    </div>
  );
}

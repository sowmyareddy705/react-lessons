import React, { useRef, useState } from "react";

export default function App15() {
  const nameRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();
  const colorRef = useRef();

  const [sum, setSum] = useState(null);
  const [textColor, setTextColor] = useState("black");

  const handleNameSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue";
  };

  const handleSumSubmit = () => {
    const n1 = parseFloat(num1Ref.current.value) || 0;
    const n2 = parseFloat(num2Ref.current.value) || 0;
    setSum(n1 + n2);
  };

  const handleColorSubmit = () => {
    const color = colorRef.current.value.toLowerCase();
    setTextColor(color);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>

      {/* Name input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button onClick={handleNameSubmit}>Submit</button>
      </div>

      <hr />

      {/* Sum Section in a box */}
      <div
        style={{
          border: "2px solid black",
          padding: "15px",
          marginBottom: "20px",
          width: "fit-content",
        }}
      >
        <input
          type="text"
          ref={num1Ref}
          placeholder="Enter number 1"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <input
          type="text"
          ref={num2Ref}
          placeholder="Enter number 2"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button onClick={handleSumSubmit}>Submit</button>
        {sum !== null && (
          <div style={{ marginTop: "10px", fontWeight: "bold" }}>{sum}</div>
        )}
      </div>

      {/* Color Section in a box */}
      <div
        style={{
          border: "2px solid black",
          padding: "15px",
          width: "fit-content",
        }}
      >
        <input
          type="text"
          ref={colorRef}
          placeholder="Enter a color"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button onClick={handleColorSubmit}>Submit</button>
        <div style={{ marginTop: "10px" }}>
          <h2 style={{ color: textColor, margin: 0 }}>Hello world</h2>
        </div>
      </div>
    </div>
  );
}

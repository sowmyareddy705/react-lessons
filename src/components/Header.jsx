import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="App-Header-Row">
      <h1 style={{ backgroundColor: "yellow", color: "blue" }}>
        React Lessons
      </h1>
      <div>
        <Link to="/" className="app-link-box">App1</Link>
        <Link to="/app2" className="app-link-box">App2</Link>
        <Link to="/app3" className="app-link-box">App3</Link>
        <Link to="/app4" className="app-link-box">App4</Link>
        <Link to="/app5" className="app-link-box">App5</Link>
        <Link to="/app6" className="app-link-box">App6</Link>
        <Link to="/app7" className="app-link-box">App7</Link>
        <Link to="/app8" className="app-link-box">App8</Link>
        <Link to="/app9" className="app-link-box">App9</Link>
        <Link to="/app10" className="app-link-box">App10</Link>
        <Link to="/app11" className="app-link-box">App11</Link>
        <Link to="/app12" className="app-link-box">App12</Link>
        <Link to="/app13" className="app-link-box">App13</Link>
        <Link to="/app14" className="app-link-box">App14</Link>
        <Link to="/app15" className="app-link-box">App15</Link>
        <Link to="/app16" className="app-link-box">App16</Link>
        <Link to="/app17" className="app-link-box">App17</Link>
        <Link to="/app18" className="app-link-box">App18</Link>
        <Link to="/app19" className="app-link-box">App19</Link>
        <Link to="/app20" className="app-link-box">App20</Link>
        <Link to="/app21" className="app-link-box">App21</Link>
      </div>
    </div>
  );
}
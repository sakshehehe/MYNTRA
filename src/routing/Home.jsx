import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MYNTRA CLONE</div>
        <div className="nav-buttons">
          <Link to="/register" className="btn-outline">Register</Link>
          <Link to="/login" className="btn-outline">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>WELCOME TO MYNTRA</h1>
          <p>Your one-stop destination for fashion & lifestyle</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-outline-dark">Already a Member? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




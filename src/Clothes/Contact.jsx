// src/components/Contact.js
import React from "react";
import "../Info.css";

function Contact() {
  return (
    <div className="info-page">
      <h2>Contact Me</h2>
      <p>If you’d like to connect or check out more of my work, here are my details:</p>

      <ul className="contact-list">
        <li>
          📧 <strong>Email:</strong> 
          <a href="mailto:sakshipawale03@gmail.com"> sakshipawale03@gmail.com</a>
        </li>
        <li>
          📱 <strong>Phone:</strong> +91 8329528849
        </li>
        <li>
          💼 <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/sakshi-pawale/" target="_blank" rel="noreferrer">
           https://www.linkedin.com/in/sakshi-pawale/
          </a>
        </li>
        <li>
          🖥️ <strong>GitHub:</strong> 
          <a href="https://github.com/sakshehehe" target="_blank" rel="noreferrer">
            https://github.com/sakshehehe
          </a>
        </li>
        <li>
          📂 <strong>Portfolio:</strong> 
          <a href="https://porfolio-reactt.netlify.app/" target="_blank" rel="noreferrer">
            View My Projects
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;

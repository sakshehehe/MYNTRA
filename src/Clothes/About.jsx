// src/components/About.js
import React from "react";
import "../Info.css";

function About() {
  return (
    <div className="info-page">
      
      <h2>About This Project</h2>
      <p>
        This website is a <strong>Myntra Clone</strong> created by me as a practice project.  
        It is built using <strong>React.js, React Router, and JSON data</strong>.  
      </p>
      <p>
        The project includes pages for <strong>Men, Women, Kids</strong> shopping categories, 
        a working <strong>Add to Cart</strong> feature, and a <strong>Checkout with Receipt</strong>.  
      </p>
      <p>
        My aim was to learn and demonstrate frontend development skills 
        like <strong>React components, state management, props, routing, and UI design</strong>.  
      </p>
      <p>
        👩‍💻 <strong>Created by:</strong> Sakshi Rajaram Pawale. 
      </p>
    </div>
  );
}

export default About;

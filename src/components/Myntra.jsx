import React from "react";

import  {Route, BrowserRouter as Router,Routes,Link} from 'react-router-dom';

import img1 from '../assets/women.jpeg';
import img2 from '../assets/men.jpeg';
import img3 from '../assets/kids.jpeg';
import img4 from '../assets/shoes.jpeg';


 export default function Myntra(){
  return(
<div>

    <div className="navbar">
        <div className="logo">Myntra</div>
        <div className="nav-links">
           
             
            <Link to='/men'>Men</Link>
            <Link to="/Women">Women</Link>
            <Link to="/Kids">Kids</Link>
            <Link to="/Bags">Bags</Link>
            
           
        </div>
    </div>

     
    <div className="banner">
        Big Fashion Sale
    </div>

    
    <h2 className="section-title">Featured Products</h2>
    <div className="product-grid">
        <div className="product-card">
            <img src={img2} alt="Product 1"/>
            <div className="product-info">
                <h4>Men's T-Shirt</h4>
                <p>₹499</p>
            </div>
        </div>
        
        <div className="product-card">
            <img src={img1} alt="Product 2"/>
            <div className="product-info">
                <h4>Women's Dress</h4>
                <p>₹899</p>
            </div>
        </div>
        <div className="product-card">
            <img src={img3} alt="Product 3"/>
            <div className="product-info">
                <h4>Kids Wear</h4>
                <p>₹699</p>
            </div>
        </div>
        <div className="product-card">
            <img src={img4} alt="Product 4"/>
            <div className="product-info">
                <h4>Casual Shoes</h4>
                <p>₹1299</p>
            </div>
        </div>
        </div>
    

     {/* <!-- Footer -->  */} 
    <div className="footer">
        &copy; 2025 Myntra Clone | Designed by You
    </div>

</div>

)

}
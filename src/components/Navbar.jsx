import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
   return(
    <nav className="navbar">
    <div className="logo">Wishlist</div>
    <ul className="nav-links">
      <li>
        <Link to="./wishlist" className="icon-link">
        <i className="fas fa-heart"></i>
        <span className="badge">2</span>
        </Link>
      </li>
      <li>
          <Link to="/cart" className="icon-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge">5</span>
          </Link>
        </li>
    </ul>

    </nav>
   )
}
export default Navbar;
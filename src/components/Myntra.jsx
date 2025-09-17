import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../Myntra.css";

function Myntra() {
  // cart count state
  const [cartCount] = useState(0); // (later you’ll update this via context/global state)

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">Myntra</div>
        <div className="nav-links">
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/Kids">Kids</Link>

          {/* Cart Icon */}
          <Link to="/Cart" className="cart-icon">
            <FaShoppingCart size={22} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="hero-banner">
        <h1>BIG FASHION SALE</h1>
        <p>Flat 50% OFF + Extra 20% Cashback</p>
        <button>Shop Now</button>
      </div>

      {/* Categories */}
      <div className="categories">
        <Link to="/Men" className="category-card">
          <img 
            src="https://i.pinimg.com/originals/df/d4/fb/dfd4fb105c2539710358dbaae45ae838.jpg" 
            alt="Men" 
          />
          <p>Shop Men</p>
        </Link>

        <Link to="/Women" className="category-card">
          <img 
            src="https://i.pinimg.com/736x/17/73/20/17732064638ecf1d5f2cedde13c762e5.jpg" 
            alt="Women" 
          />
          <p>Shop Women</p>
        </Link>

        <Link to="/Kids" className="category-card">
          <img 
            src="https://tse1.explicit.bing.net/th/id/OIP.uXSCx-X8BEqPvscfrTtd2gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Kids" 
          />
          <p>Shop Kids</p>
        </Link>
      </div>

      {/* Trending Section */}
      <div className="trending">
        <h2>Trending Now</h2>
        <div className="trending-list">
          <div className="trend-card">
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/air-jordan-1-mid-shoes-7cdjgS.png" alt="Shoes" />
            <p>Sneakers</p>
          </div>
          <div className="trend-card">
            <img src="https://tse3.mm.bing.net/th/id/OIP.jLOfjf0vfHPl91g88w4NUQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Dresses" />
            <p>Sunglasses</p>
          </div>
          <div className="trend-card">
            <img src="https://tse2.mm.bing.net/th/id/OIP.oYJg1Jdg3cOVni5ZhhmN_wHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Shirts" />
            <p>Watch</p>
          </div>
          <div className="trend-card">
            <img src="https://cdna.lystit.com/photos/lncc/d92a72cd/vivienne-westwood-Black-Hazel-Small-Shoulder-Bag.jpeg" alt="Bags" />
            <p>Bags</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025 Myntra Clone | Built with React</p>
        <p>
          <Link to="/Contact">Contact</Link> | <Link to="/About">About</Link>
        </p>
      </div>
    </div>
  );
}

export default Myntra;


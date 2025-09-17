import React from "react";
import './Products.css';   

// Destructure props directly
const ProductList = ({ prodList, onAddToCart }) => {

  const renderList = () => {
    if (prodList) {
      return prodList.map((data) => { 
        return (
          <div key={data.id} className="card col-md-3">
            <div className="row">
              <div className="card-img">
                <img className="card-img-top" src={data.img} alt={data.name}/>
              </div>
              <hr/>
              <span className="topTemp">{data.name}</span>
            </div>

            <div className="card-body">
              <span className="max">Rs. {data.price}</span>
              <h4 className="card-title">{data.type}</h4>
              <div className="card-text">
                <p className="day">Rs. {data.price}</p>
              </div>

              {/* 🛒 Add to Cart button */}
              <button 
                className="btn btn-primary"
                onClick={() => onAddToCart(data)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )
      })
    }
  } 

  return (
    <div className="container">
      <div className="row">
        {renderList()}
      </div>
    </div>
  )
}

export default ProductList;

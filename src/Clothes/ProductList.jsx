import React from "react";
import './Products.css';   
const ProductList = (prodList) => {
  const renderList = ({prodList}) => {
    if(prodList){
      return prodList.map((data) => { 
        return(
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
            </div>
          </div>
        )
      })
    }
  } 
  return(
    <div className="container">
      <div className="row">
          {renderList(prodList)}
      </div>
    </div>
  )
}
export default ProductList;
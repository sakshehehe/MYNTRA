import React, { useEffect, useState } from 'react';
import './Products.css'; // your custom CSS
import axios from 'axios';

function ProductList1() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // optional loading indicator
  const [error, setError] = useState(null); // optional error handling

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5009/Men') // your json-server endpoint
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('Something went wrong while fetching data.');
        setLoading(false);
      });
  }, []);

  const renderList = () => {
    return products.map((data) => (
      <div key={data.id} className="card col-md-3">
        <div className="row">
          <div className="card-img">
            <img className="card-img-top" src={data.img} alt={data.name} />
          </div>
          <hr />
          <span className="topTemp">{data.name}</span>
        </div>
        <div className="card-body">
          <span className="max">Rs. {data.price}</span>
          <h4 className="card-title">{data.type}</h4>
          <div className="card-text">
            <p className="day">{data.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <h2>Product List</h2>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="row">
        {!loading && !error && renderList()}
      </div>
    </div>
  );
}

export default ProductList1;
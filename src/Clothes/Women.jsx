import React, { Component } from "react";
import JSONw from "../Women.json";
import ProductList from "./ProductList";
import './Products.css';

class Women extends Component {
  constructor() {
    super();
    this.state = {
      title: "Women's Products",
      products: JSONw
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <ProductList prodList={this.state.products} />
      </div>
    );
  }
}

export default Women;

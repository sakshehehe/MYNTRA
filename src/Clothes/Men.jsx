import React, { Component } from "react";
import JSONm from "../JSONfiles/Men.json";
import ProductList from "./ProductList";
import './Products.css';

class Men extends Component {
  constructor() {
    super();
    this.state = {
      title: "Men's Products",
      products: JSONm
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

export default Men;

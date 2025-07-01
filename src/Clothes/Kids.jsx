import React,{Component} from "react";
import JSONk from '../JSONfiles/Kids.json';
import ProductList from './ProductList';

import './Products.css';

class Kids extends Component{
  constructor(){
    super();
    this.state={
      title:'Kids Page',
      products: JSONk
    }
  }
  render(){
    return(
      <div>
        <h2>{this.state.title}</h2>
        <ProductList prodList={this.state.products}/>
      </div>
    )
  }

}
export default Kids;
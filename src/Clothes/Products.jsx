import react,{Component} from "react";
import JSON from '../demo.json';
import ProductList from './ProductList';

import './Products.css';

class Products extends Component{
  constructor(){
    super();
    this.state={
      title: 'Product Page',
      products:JSON
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
export default Products;

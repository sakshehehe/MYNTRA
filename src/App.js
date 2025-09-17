
import './App.css';
import { CartProvider } from './CartContext';
//import ProductList from './Clothes/ProductList';
 import Routing from './routing/Routing';

//import Myntra from './components/Myntra';



function App() {
  return (
    <div>
     
    <CartProvider>
     <Routing/>
     </CartProvider>
     {/* <Products/> */}
   
     
     
    </div>
  );
}

export default App;

import React from "react";
import  {Route, BrowserRouter as Router,Routes} from 'react-router-dom';


import Women from '../Clothes/Women';
import Men from '../Clothes/Men';
import Kids from '../Clothes/Kids';
import Myntra from "../components/Myntra";
import Navbar from '../components/Navbar';

const Routing = () => {
  return(
    <div>
      <Router>
       {/*  <ul>
          <li>
            <Link to='/Home'>Home</Link>
          </li>
          <li>
            <Link to='/Women'>Women</Link>
          </li>
          <li>
            <Link to='/Men'>Men</Link>
          </li>
          <li>
            <Link to='/Kids'>Kids</Link>
          </li>
        </ul> */}

        <Routes>
          <Route path='/' element={<Myntra/>}/>
          <Route path='/Home' element={<Myntra/>}/>
          <Route path='/Women' element={<Women/>}/>
          <Route path='/Men' element={<Men/>}/>
          <Route path='/Kids' element={<Kids/>}/>
          <Route path='/Home' element={<Navbar/>}/>
        </Routes>
        </Router>
    </div>
  )
}
export default Routing;


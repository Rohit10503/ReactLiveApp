
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Routes , Route} from "react-router-dom"

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ProductList from './pages/productlist';
import ProductDetail from './pages/product-deatil';
function App() {
  return (
  
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:ProductName/:ProductId" element={<ProductDetail />}/>
      </Routes>
      
      
      
    </div> 
  );
}

export default App;

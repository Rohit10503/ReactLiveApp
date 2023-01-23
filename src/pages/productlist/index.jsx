import React from "react";
import Form from 'react-bootstrap/Form';
import NavbarMain from "../../common/components/navbar-main";
import Header from "../../common/components/header";
import "./productlist.css"
import Footer from "../../common/components/footer";
import Filters from "./components/filters";
import ProductsMain from "./components/products-main";

const ProductList=()=>{

    

    return(
        <div className="product-list-main">
           <Header/>
           <NavbarMain/>
           <div className="body-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-3  text-align-left" >
                        <Filters/>
                    </div>
                    <div className="col-md-9  text-align-left" >
                        <div className="products-main">
                        <h2 className="products-heading">All Mobile Heading </h2>
                        
                        <div className="sort-by">
                            <span className="sortby-label">Sort by</span>
                            <Form.Select size="sm" className="options">
                            <option value="Price Low to High">Price Low to High</option>
                                <option value="Price High to Low">Price High to Low</option>
                                <option value="Popularity">Popularity</option>
                                <option value="Ratings">Ratings</option>
                         
                            </Form.Select>

                         </div>
                         </div>


                            <ProductsMain />

                        


                    </div>



                </div>
            </div>
           </div>
           <Footer/>
        </div>
    );
};
export default ProductList;
import React from "react";

import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import BreadCrumb from "./components/breadcrumb";
import ProductDetaliSection from "./components/product-detail-section";

import "./product-detail.css"


const ProductDetail =()=>{
    return(
        <div className="product-detail-main">
            <Header/>
            <NavbarMain/>
            <div className="body-main">
               <div className="container">
                    <BreadCrumb/>                    
                        <div className="product-section">
                           <div className="row">
                                <div className="col-md-5  hii">hii</div>

                                <div className="col-md-6">
                                    <ProductDetaliSection/>
                                </div>


                                <div className="col-md-1">
                                    <button className="btn-share d-flex">
                                    <div className="share">
                                        
                                    <i class="bi bi-share-fill"></i>
                                    <span className="mx-2">Share</span>
                                    </div></button>
                                </div>



                           </div>
                        </div>
                </div>
               </div>
                
            
            <Footer/>




        </div>
    );
};
export default ProductDetail;
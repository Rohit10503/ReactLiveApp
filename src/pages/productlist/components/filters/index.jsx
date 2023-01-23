import Form from 'react-bootstrap/Form';
import React from "react";
import "./filters.css"

const Filters=()=>{
    
    return(

    <div> 
         <h3 className="filter-heading" >Filters</h3>
           <div className="filter-main">
                <div className="brand-filter">
                    <div className="brand-top">
                        <h3 className="filter-section-heading">Brands</h3>
                        <a href="#/" className="viewall">ViewAll</a>
                    </div>
                        <div className="brand-options">
                            <div className="brand-option">
                                <div>
                                    <input type="checkbox" />
                                    <span className="mx-2">Samsung</span>
                                </div>
                                    <div>45</div>
                            </div>




                            <div className="brand-option">
                            <div>
                                    <input type="checkbox" />
                                    <span className="mx-2">Oppo</span>
                                </div>
                                    <div>25</div>
                            </div>
                            <div className="brand-option">
                            <div>
                                    <input type="checkbox" />
                                    <span className="mx-2">Mi</span>
                                </div>
                                    <div>30</div>
                            </div>
                            <div className="brand-option">
                            <div>
                                    <input type="checkbox" />
                                    <span className="mx-2">Poco</span>
                                </div>
                                    <div>14</div>
                            </div>
                            <div className="brand-option">
                            <div>
                                    <input type="checkbox" />
                                    <span className="mx-2">Iphone</span>
                                </div>
                                    <div>65</div>
                            </div>
                        </div>






                </div>
                <div>
                <div className="filter-section-heading price">Price</div>
                <div className="range">
                <Form.Label className='custom-price-value' > Rs.10,000-Rs.25,000
                
                </Form.Label>
      <Form.Range />
                </div>
                </div>
            </div>


    </div>
    );
};
export default  Filters;
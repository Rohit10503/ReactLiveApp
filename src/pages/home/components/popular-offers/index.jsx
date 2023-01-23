import React from "react";
import "./popular-offers.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PopularOffersPhones from "../popular-offers-phones";
import { useNavigate } from "react-router-dom";

const PopularOffer = () => {

    const navigate = useNavigate();

    const goToProductList = () => {
        navigate("/products")
    };

    return (
        <div className="container  popular-offer-main">
            <div className="top-part">
                <div className="heading">
                    <h3 className="section-heading">Popular Mobile Offers</h3>
                    <button className="sub-button mx-3" onClick={goToProductList}>View All</button>
                </div>

                <div className="tabs">

                    <Tabs
                        defaultActiveKey="10000"
                        className="mb-3">


                        <Tab eventKey="10000" title="Under Rs. 10,000" className="custom-name" >
                            <PopularOffersPhones />
                        </Tab>
                        <Tab eventKey="15000" title="Rs. 10,000-Rs. 15,000" className="custom-name">
                            <PopularOffersPhones />
                        </Tab>
                        <Tab eventKey="25000" title="Rs. 15,000-Rs. 25,000" className="custom-name default">
                            <PopularOffersPhones />
                        </Tab>
                        <Tab eventKey="50000" title="Rs. 25,000-Rs. 50,000" className="custom-name">
                            <PopularOffersPhones />
                        </Tab>
                        <Tab eventKey="above" title="Above Rs.50,000" className="custom-name">
                            <PopularOffersPhones />
                        </Tab>
                    </Tabs>
                </div>


            </div>

        </div>
    );
};
export default PopularOffer;
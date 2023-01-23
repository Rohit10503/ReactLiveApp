import React from "react";
import "./phone-products.css"
import { useNavigate } from "react-router-dom";


const PhoneProducts = (props) => {
    const navigate = useNavigate();

    const { productData } = props;
    const { FileImage, name, CurrentPrice, OriginalPrice, Discount, Offer, Emi, Id } = productData;

    const goToProductDetailPage = () => {
        
        const prodName = name.replaceAll(" ", "-");
        navigate("/products/${name}/${Id}");
        
    };


    return (                           
        <div className="phone-products col" onClick={goToProductDetailPage}>
            <div>
                <img src={FileImage} alt="" width="200" height="300" />
            </div>
            <div className="phone-offer">{Offer}</div>
            <div className="phone-name">{name}</div>
            <div className="phone-prices">
                <div className="current-price">{CurrentPrice}</div>
                <div className="original-price">{OriginalPrice}</div>
                <div className="discount">{Discount}</div>
            </div>
            <div className="emi">{Emi} </div>
            
            <div className="id">{Id}</div>
        </div>
    );

};
export default PhoneProducts;
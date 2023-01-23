import React from "react";
import "./product-detail-section.css";
const ProductDetaliSection = () => {
    return (
        <div>
            <h1 className="product-title">Apple iPhone 14 Pro Max 256GB Gold</h1>
            <div className="features">
                <p className="feature-heading">Key Features</p>
                <ul>
                    <li>Capacity 6kg : Suitable for bachelors and couples </li>
                    <li>Warranty : 4 years on product, 4 years on motors 800rpm</li>
                    <li>Higher the spiun speed, faster the drying time </li>
                </ul>
            </div>
            <div className="color-picker">
                <p className="color-heading">Choose Color</p>
                <div className="d-flex align-item-center justify-space-between">
                    <div className="color-picker"></div>
                    <div className="color-picker"></div>
                    <div className="color-picker"></div>
                    <div className="color-picker"></div>
                    <div className="color-picker"></div>
                    </div> 

                    <div className="quantity">
                        <label htmlFor="">Select Qty.</label>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className="prices-and-taxes">
                        <div className="top-part d-flex">
                            <div className="current-price">₹88,740</div>
                            <div className="original-price">₹89,900</div>
                            <div className="discount">1% off</div>
                        </div>
                        <div className="bottom-part">Inclusive of all taxes
                            </div>
                    </div>

                    <div className="other-details">
                        <div><i class="bi bi-credit-card-2-back-fill"></i>
                            <span>  No cost EMI ,₹1,750/month. Standerd EMI is also available. T&C</span> </div>
                        <div><i class="bi bi-patch-check"></i>
                            <span>   Bank offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. T&C</span></div>
                    </div>

                        <div className="add-to-cart">
                          <button className="add">Add to Cart</button>  
                       </div>

                
            </div>
        </div>
    );
};
export default ProductDetaliSection;
/*
FileImage: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71T5NVOgbpL._AC_SX750_.jpg",
name: "Apple iPhone 14 Pro Max 256GB Gold",
CurrentPrice: "₹88,740",
OriginalPrice: "₹89,900",
Discount: "1% off",
Offer: "5% Cashback",
Emi: "EMI starts @ ₹4,240",
id:"5678",
*/
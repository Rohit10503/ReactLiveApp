import React from "react";
import PhoneProducts from "../../../../common/components/phone-products";
import "./popular-offers-phones.css"
import { SamplePhone } from "../../../../common/constants/sample-phone";
const PopularOffersPhones = () => {
    return (
        <div className="popular-offers-main">

            <div className="row ">

                {
                    SamplePhone.map(phone => {
                        return (<PhoneProducts productData={phone} key={phone.id}  />);
                    })
                }





            </div>
        </div>




    );
};
export default PopularOffersPhones; 
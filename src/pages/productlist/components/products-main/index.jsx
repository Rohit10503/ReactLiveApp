import React from "react";
import "./products-main.css"
import PhoneProducts from "../../../../common/components/phone-products";
import { SamplePhoneProductList } from "../../../../common/constants/samplePhoneProductList";
import Pagination from 'react-bootstrap/Pagination'
const ProductsMain = () => {
    return (
        <>
            <div className="product-main">
                <div className="all-productlist">
                    <div className="row">
                    {SamplePhoneProductList.map(phone => {
                       return (<PhoneProducts productData={phone}
                        key={phone.id} />);
                        

                    })}
</div>




                </div>
                <div className="custom-pagination">
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item >{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>

                </div>

            </div>

        </>
    );
};
export default ProductsMain;
import React from "react";
import "./footer-top.css"
const FooterTop=()=>{
   return (

   <section className="footer-top-main container">
      <div className="row ">
         
         <div className="col-md-3 features ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTbBnmaEWKNuch6HPhMVb3o0_Pc0A2PnLbg&usqp=CAU"height="150px" alt="" />
           <div className="feature-text"> 100% Secure Payment</div>
           <p className="sub-title">Lorem ipsum dolor sit amet  Similique, placeat cum. Repellendus quod optio quis voluptas delectus.</p>
           </div>
         <div className="col-md-3 features">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0POcvX5YlH1BurH9XkqGLe1YyRPGftUu0A&usqp=CAU"height="150px" alt="" />
           <div className="feature-text"> Trust pay</div>
           <p className="sub-title">Lorem ipsum dolor sit amet  Similique, placeat cum. Repellendus quod optio quis voluptas delectus.</p>
           </div>
         <div className="col-md-3 features">
            <img src="data:image/png;base64,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"height="150px" alt="" />
         <div className="feature-text">
               Help Center</div>
               <p className="sub-title">Lorem ipsum dolor sit amet  Similique, placeat cum. Repellendus quod optio quis voluptas delectus.</p>
               </div>
         <div className="col-md-3 features"><img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Calculator-icon.png "height="150px" alt="" />
            <div className="feature-text">Easy Installment</div>
            <p className="sub-title">Lorem ipsum dolor sit amet  Similique, placeat cum. Repellendus quod optio quis voluptas delectus.</p>
            </div>
      </div>
   </section>

   
   );
};
export default FooterTop;



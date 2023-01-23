
import React from "react";
import "./header.css"
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate = useNavigate();
    const goToLoginPage=()=>{
            navigate("/login");
    };
   


    return(
        <div className="container">
            <div className="main-content">
                <div classsName="left-content">  


                    



             
                <div class="input-group custom-width mx-4">
  <input type="text" class="form-control" placeholder="search for products ,brands or more.." aria-label="search for products ,brands or more.."/>
  <span class="input-group-text pink" id="basic-addon2"><i class="bi bi-search"></i></span>
</div>
                
                </div>

                <div classname="right-content  ">
                    <i class="bi bi-cart header-icon"></i>                  
                      <span className="header-text mx-2">Cart</span>

                    <i class="bi bi-person-circle header-icon marginLeft20 "></i>
                    <span className="header-text mx-2" onClick={goToLoginPage}>Login/Sign up</span>

                    
                </div>
            </div>
        </div>
    );
        
    
};
export default Header;
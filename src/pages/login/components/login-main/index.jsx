import React from "react";
import "./login-main.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const LoginMain = () => {
    return <div className="login-main">
        <div classname="login-container">
            <h1 className="main-head ">Login to Continue 👋</h1>
            
            <FloatingLabel
        controlId="floatingInput"
        label="Email Address"
        className="my-4"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>


            

            <FloatingLabel
        controlId="floatingInput"
        label="Password"
        className="my-4"
      >
        <Form.Control type="password" placeholder="name@example.com" />
      </FloatingLabel>

            <div  className="my-4 text-right">
                <a href="#/" className="text-pink size-small">Forget Password?</a>

            </div>
            <div className="form-container my-4 p-2">
                <button className=" main-button btn-info" >Sign In</button>
            </div>
            <div >
                <span className="bold">Don't have an Account?<a href="/register" className="text-pink size-medium">Create New</a></span>
            </div>
        </div>


    </div>
};
export default LoginMain;
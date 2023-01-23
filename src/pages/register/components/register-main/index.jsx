import React from "react";
import "./register-main.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const RegisterMain = () => {
    return <div className="register-main">
        <div classname="register-container">
            <h1 className="main-head ">Create Account 😍</h1>
             

            <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="my-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>


            
            <FloatingLabel
        controlId="floatingInput"
        label="Mobile Number"
        className="my-3"
      >
        <Form.Control type="number" placeholder="name@example.com" />
      </FloatingLabel>

 

            <FloatingLabel
        controlId="floatingInput"
        label="Email Address"
        className="my-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>


           
            <FloatingLabel
        controlId="floatingInput"
        label="Date of Birth"
        className="my-3"
      >
        <Form.Control type="date" placeholder="name@example.com" />
      </FloatingLabel>


           

            <FloatingLabel
        controlId="floatingInput"
        label="Password"
        className="my-3"
      >
        <Form.Control type="password" placeholder="name@example.com" />
      </FloatingLabel>

            
             

            <FloatingLabel
        controlId="floatingInput"
        label="Confirm Password"
        className="my-3"
      >
        <Form.Control type="password" placeholder="name@example.com" />
      </FloatingLabel>


            
            <div className="form-container my-2 p-2">
                <button className=" main-button btn-info" >Create Account</button>
            </div>
            <div >
                <span className="bold">Already have an Account?<a href="/login" className="text-pink size-medium">Login here</a></span>
            </div>
        </div>


    </div>
};
export default RegisterMain;
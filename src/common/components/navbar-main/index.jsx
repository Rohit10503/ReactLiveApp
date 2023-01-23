import React from "react";
import "./navbar-main.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavbarMain=()=>{
    return(
            
              
        <Navbar bg="primary" variant="dark">
        <Container>
        <div className="nav-main">
        <div className="nav-left">
<Nav className="me-auto">
<Nav.Link href="#Samsung" className="custom-nav-link">Samsung Mobiles</Nav.Link>
<Nav.Link href="#iPhones"className="custom-nav-link">iPhones</Nav.Link>
<Nav.Link href="#Mi"className="custom-nav-link">Mi Phones</Nav.Link>
<Nav.Link href="#Oppo"className="custom-nav-link">Oppo Phones</Nav.Link>
<Nav.Link href="#Oneplus"className="custom-nav-link">Oneplus Phones</Nav.Link>
<Nav.Link href="#Vivo"className="custom-nav-link">Vivo Phones</Nav.Link>
<Nav.Link href="#Others"className="custom-nav-link">Others</Nav.Link>
</Nav>

</div>
      <div className="nav-right">
      <i class="bi bi-patch-check"></i>
        <span className="offer-text mx-1 ">Offer</span>
      <button className="sub-button mx-3">New</button>
      </div>
      </div>
        </Container>
      </Navbar>
    
    
    );
};
export default NavbarMain;










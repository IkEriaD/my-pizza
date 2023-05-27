import React from "react";
import { Nav } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";


function NavbarComp() {
    return(

        <Router>
        <div>
        
        <nav class="w3-top w3-hide-small">
        <div class="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off" id="myNavbar">
            <Nav.Link className="w3-bar-item w3-button" as={Link} to={"/home"}>HOME</Nav.Link>
            <Nav.Link className="w3-bar-item w3-button" as={Link} to={"/menu"}>MENU</Nav.Link>
            <Nav.Link className="w3-bar-item w3-button" as={Link} to={"/about"}>ABOUT</Nav.Link>
            <Nav.Link className="w3-bar-item w3-button" as={Link} to={"/contact"}>CONTACT</Nav.Link>
        </div>
       
        </nav>
        
        <Routes>
               <Route path="/home" element={<Home/>}></Route>
               <Route path="/menu" element={<Menu/>}></Route>
               <Route path="/about" element={<About/>}></Route>
               <Route path="/contact" element={<Contact/>}></Route>    
        </Routes>
        
        
        
        </div>
        </Router>
    );
}

export default NavbarComp;







{/* <nav class="navbar navbar-expand-sm fixed-top bg-secondary navbar-item">
        <div class="container-fluid navbar-item">
        <div class="navbar-nav navbar-item">
            <Nav.Link className="text-white navbar-item" as={Link} to={"/home"}>HOME</Nav.Link>
            <Nav.Link className="text-white navbar-item" as={Link} to={"/menu"}>MENU</Nav.Link>
            <Nav.Link className="text-white navbar-item" as={Link} to={"/about"}>ABOUT</Nav.Link>
            <Nav.Link className="text-white navbar-item" as={Link} to={"/contact"}>CONTACT</Nav.Link>
        </div>
        </div>
        </nav>
        
        <Routes>
               <Route path="/home" element={<Home/>}></Route>
               <Route path="/menu" element={<Menu/>}></Route>
               <Route path="/about" element={<About/>}></Route>
               <Route path="/contact" element={<Contact/>}></Route>    
        </Routes> */}
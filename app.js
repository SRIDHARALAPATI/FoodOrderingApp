import React from "react";
import  ReactDOM  from "react-dom/client";

/*
Header
    -Logo
    -Navlinks
Body
    -Search bar
    -Restaurant-container
        -Resturant card
            -img
            -Name of resturant, cuisine, 
Fotter
    -copyright
    -links 
    -address
    -contact

*/

const HeaderComponent = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="Nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppyLayout=()=>{
return(
<div className="main-container">
<HeaderComponent/>
</div>);
};


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppyLayout/>);
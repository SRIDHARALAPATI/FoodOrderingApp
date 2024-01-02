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

const RestaurantCard=()=>{
  return(
    <div className="res-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"></img>
      <h3>Kadai Restaurant</h3>
  </div>);
};
const Body = () => {
  return (
    <div className="body-container">
      <div className="Search"><h4>Search</h4></div>
      <div className="card-container">
      <RestaurantCard/>
      </div>
      
    </div>
  );
};
const AppyLayout=()=>{
return(
<div className="main-container">
<HeaderComponent/>
<Body/>
</div>);
};


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppyLayout/>);
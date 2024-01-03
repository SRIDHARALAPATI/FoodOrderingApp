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
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/1719aa7f54af12828f9cb75076051ca4"></img>
      <h3 className="res-name">Kadai Restaurant</h3>
      <div className="rat-eta"><h4>4.6 stars</h4>
      <h4>30 mins</h4></div>
      <h4>Biryani, Butter Chicken, Fast Food</h4>

  </div>);
};
const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input className="input" type="text" placeholder="Search for restaurant and food"/>
        <button>Search</button>
      </div>
      <div className="card-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout=()=>{
return(
<div className="main-container">
<HeaderComponent/>
<Body/>
</div>);
};


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
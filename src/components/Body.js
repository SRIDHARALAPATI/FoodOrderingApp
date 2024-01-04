import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState } from "react";
const Body = () => {

 
const[resdata, setresdata]=useState(restaurantList);
    return (
      <div className="body-container">
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder="Search for restaurant and food"
          />
          <button>Search</button>
          <button
            className="filter"
            onClick={() => {const filterres=resdata.filter((res)=>res.info.avgRating>4.5);
            setresdata(filterres);
            }}>
            Filter
          </button>
        </div>
        <div className="card-container">
          {resdata.map((resinfo) => (
            <RestaurantCard key={resinfo.info.id} resdata={resinfo} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
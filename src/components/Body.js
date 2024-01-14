import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resdata, setresdata] = useState([]);
  useEffect(() => {
    getResData();
  }, []);

  const getResData = async () => {
    const swiggy_api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const swiggy_data = await swiggy_api.json();
    console.log(swiggy_data);
    setresdata(
      swiggy_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (resdata.length === 0) {
    return <Shimmer/>;
  }
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
          onClick={() => {
            const filterres = resdata.filter((res) => res.info.avgRating > 4.0);
            setresdata(filterres);
          }}
        >
          Top Rated Restaurants
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

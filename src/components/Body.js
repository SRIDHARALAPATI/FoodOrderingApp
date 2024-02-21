import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resdata, setresdata] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  console.log(searchRes);

  useEffect(() => {
    getResData();
  }, []);

  const getResData = async () => {
    const swiggy_api = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const swiggy_data = await swiggy_api.json();
    console.log(swiggy_data);
    const restaurants =
      swiggy_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setresdata(restaurants);
    setFilteredResData(restaurants);
  };
  // conditional rendering
  return resdata.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search for restaurant and food"
          value={searchRes}
          onChange={(e) => setSearchRes(e.target.value)}
        />
        <button
          onClick={() => {
            const resresult = resdata.filter((res) =>
              res.info.name.toLowerCase().includes(searchRes.toLowerCase())
            );
            setFilteredResData(resresult);
            console.log(resresult);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setSearchRes("");
          }}
        >
          Clear
        </button>
        <button
          className="filter"
          onClick={() => {
            const filterres = filteredResData.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredResData(filterres);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {filteredResData.map((resinfo) => (
          <Link className="cards" key={resinfo.info.id} to={"/restaurants/"+resinfo.info.id}>
          
            <RestaurantCard key={resinfo.info.id} resdata={resinfo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
const Body = () => {
    return (
      <div className="body-container">
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder="Search for restaurant and food"
          />
          <button>Search</button>
        </div>
        <div className="card-container">
          {restaurantList.map((resinfo) => (
            <RestaurantCard key={resinfo.info.id} resdata={resinfo} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
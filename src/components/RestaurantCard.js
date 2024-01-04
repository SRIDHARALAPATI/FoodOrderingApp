import { RES_CDN } from "../../utils/constants";
const RestaurantCard = (props) => {
    const { resdata } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      slaString,
    } = resdata?.info;
    return (
      <div className="res-card">
        <img
          src={RES_CDN
            +
            cloudinaryImageId
          }
        ></img>
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{slaString}</h4>
      </div>
    );
  };

  export default RestaurantCard;
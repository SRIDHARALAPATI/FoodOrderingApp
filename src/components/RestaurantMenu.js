import { useState, useEffect } from "react";
import { ResMenuAPI } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchmenu();
  }, []);
  const fetchmenu = async () => {
    const menu_API = await fetch(ResMenuAPI + resId);
    const menuData = await menu_API.json();
    console.log(menuData);
    setResInfo(menuData);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, areaName } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} -{" ₹"}{item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

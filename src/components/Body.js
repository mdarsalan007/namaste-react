import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.8466937&lng=80.94616599999999&str=restaurants&trackingId=undefined&submitAction=ENTER&queryUniqueId=3c0571b4-390c-0971-7341-d7dc15d44c25"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => {
              return res.card.card.info.avgRating > 4.4;
            });
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          const {
            cloudinaryImageId,
            id,
            name,
            cuisines,
            avgRating,
            sla,
            costForTwoMessage,
          } = restaurant.card.card.info;
          const delTime = sla.deliveryTime + " mins";
          const cuisine = cuisines.join(", ");

          return (
            <RestaurantCard
              key={id}
              image={cloudinaryImageId}
              resName={name}
              cuisine={cuisine}
              rating={avgRating}
              deltime={delTime}
              costforTwo={costForTwoMessage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

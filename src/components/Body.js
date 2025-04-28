import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  console.log("body rendered");
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
    setfilteredRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredReastaurants = listOfRestaurant.filter((res) => {
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurants(filteredReastaurants);
            }}
          >
            Seacrh
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => {
              return res.card.card.info.avgRating > 4.4;
            });
            setfilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
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

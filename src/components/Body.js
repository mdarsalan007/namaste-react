import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [allRestaurants, setallRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=null"
    );

    const json = await data.json();
    console.log(json);
    const restlist =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setallRestaurants(restlist);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = allRestaurants.filter(
              (res) => res.info?.avgRating > 4.5
            );
            setallRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {allRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

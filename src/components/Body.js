import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer1";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import useBody from "./utils/useBody";

const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");


  const listOfRestaurant = useBody();
  useEffect(() => {
    setfilteredRestaurants(listOfRestaurant);
  }, [listOfRestaurant]);

 const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Looks like you are offline. Please check your internet connection.</h1>
  }
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
            <Link className="ind-card" key={id} to={"/restaurants/" + id}>
              <RestaurantCard
                image={cloudinaryImageId}
                resName={name}
                cuisine={cuisine}
                rating={avgRating}
                deltime={delTime}
                costforTwo={costForTwoMessage}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

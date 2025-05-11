import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import useBody from "./utils/useBody";
import Shimmer1 from "./Shimmer1";

const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  const listOfRestaurant = useBody();
  useEffect(() => {
    setfilteredRestaurants(listOfRestaurant);
  }, [listOfRestaurant]);

 const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Looks like you are offline. Please check your internet connection.</h1>
  }
  return listOfRestaurant.length === 0 ? (
    <Shimmer1 />
  ) : (
    <div className="m-2">
      <div className="filter flex ">
        <div className="search mx-2 h-7 border-0 outline-0 flex items-center text-sm">
          <input
            className="search-box ml-2 px-2 w-78 h-7 border-0 outline-0 bg-gray-300 rounded-sm"
            type="text"
            data-testid = "SearchInput"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className="bg-[#ffa938] h-7  w-20 text-md font-medium rounded-r-sm cursor-pointer ml-[-5rem]"
            onClick={() => {
              const filteredReastaurants = listOfRestaurant.filter((res) => {
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurants(filteredReastaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-[#ffa938] h-7 font-medium text-sm  w-44 rounded-sm cursor-pointer mx-2"
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

      <div className="res-container flex flex-wrap justify-start mx-1">
        {filteredRestaurants.map((restaurant) => {
          const {
            cloudinaryImageId,
            id,
            name,
            cuisines,
            avgRating,
            sla,
            costForTwoMessage,
            promoted
          } = restaurant.card.card.info;
          const delTime = sla.deliveryTime + " mins";
          const cuisine = cuisines.join(", ");

          return (
            <Link className="w-56 flex flex-col items-start bg-yellow-100 m-2 rounded-lg hover:outline-gray-600 hover:outline-1 hover:bg-yellow-200" key={id} to={"/restaurants/" + id}>
              {promoted?<RestaurantCardPromoted
              image={cloudinaryImageId}
              resName={name}
              cuisine={cuisine}
              rating={avgRating}
              deltime={delTime}
              costforTwo={costForTwoMessage}
              />:<RestaurantCard 
                image={cloudinaryImageId}
                resName={name}
                cuisine={cuisine}
                rating={avgRating}
                deltime={delTime}
                costforTwo={costForTwoMessage}
              />}
            </Link>
            
          );
        })}
      </div>
    </div>
  );
};

export default Body;

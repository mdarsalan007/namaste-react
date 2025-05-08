import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom"


const useBody = ()=>{
  const { selectedCity } = useOutletContext(); 
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

  


    useEffect(() => {
        fetchData(selectedCity.lat, selectedCity.lng);
      }, [selectedCity]);
      const fetchData = async (lat, lng) => {
        const data = await fetch(
          `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=restaurants&trackingId=undefined&submitAction=ENTER&queryUniqueId=3c0571b4-390c-0971-7341-d7dc15d44c25`
        );
    
        const json = await data.json();
    
        const listofrestaurantsarr = json?.data?.cards;
        listofrestaurantsarr.forEach((c) => {
          const validlistofrestaurants =
            c.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
          if (validlistofrestaurants) {
            setListOfRestaurant(validlistofrestaurants);
            
          }
        });
      };

      return listOfRestaurant;
}

export default useBody;
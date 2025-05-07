import { useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";


const useRestaurantMenu = (resId)=>{
  const { selectedCity } = useOutletContext(); 

    const [resInfo, setResInfo] = useState(null);


   

    useEffect(() => {
        fetchMenu(selectedCity.lat, selectedCity.lng);
      }, [selectedCity]);


      const fetchMenu = async (lat, lng) => {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=` +
            resId +
            `&catalog_qa=undefined&submitAction=ENTER`

            
        );
        const json = await data.json();
        setResInfo(json);
      };

      return resInfo;
}

export default useRestaurantMenu;
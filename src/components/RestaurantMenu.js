import { useState, useEffect } from "react";
import Shimmer2 from "./Shimmer2";
import useOnlineStatus from "./utils/useOnlineStatus";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";



const RestaurantMenu = () => {
  const [apidatainfo, setapidatainfo] = useState(null);
  const [menupath, setmenupath] = useState([]);
  const [MenuCategories, setMenuCategories] = useState({});

  // const [showMenu,setshowMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);


  const handleCategoryClick = (categoryName) => {
    setActiveCategory((prev) => (prev === categoryName ? null : categoryName));
  };
  


  const { resId } = useParams();


  const resInfo = useRestaurantMenu(resId);
  useEffect(() => {
    if (resInfo) {
      const apidatainfoArr = resInfo?.data?.cards;

      apidatainfoArr.forEach((elem) => {
        let validapidatainfo = elem.card?.card?.info;
        if (validapidatainfo) {
          setapidatainfo(validapidatainfo);
        }
      });

      apidatainfoArr.forEach((elem) => {
        if (elem.groupedCard) {
          const validoutermenupath =
            elem.groupedCard.cardGroupMap.REGULAR.cards;
          if (validoutermenupath) {
            setmenupath(validoutermenupath);
          }
        }
      });
    }
  }, [resInfo]);

  useEffect(() => {
    const menucategories = {};

    menupath.forEach((elem) => {
      if (elem?.card?.card?.title && elem?.card?.card?.itemCards) {
        const categoryName = elem?.card?.card?.title;
        const item = elem?.card?.card?.itemCards;
        menucategories[categoryName] = item;
      }
    });
    setMenuCategories(menucategories);
  }, [menupath]);

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Looks like you are offline. Please check your internet connection.</h1>
  }
  if (apidatainfo === null) {
    return <Shimmer2 />; // fallback if structure is different
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    locality,
    areaName,
    city,
  } = apidatainfo;
  return (
    <div className="menu-page  flex flex-col items-center ">
      <h3 className="menu-page-res-name font-bold text-3xl my-3 mt-6 w-150">{name}</h3>
      <div className="res-info-box flex flex-col mt-1 w-150 bg-gray-200 p-2 font-[500] rounded-2xl">
        <p className="rating-line ">
          <span style={{ color: "green" }}>★</span>
          {avgRating || 4.1}({totalRatingsString || `134 ratings` }) - {costForTwoMessage}
        </p>
{/* data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[0].card.card.info.sla.slaString */}
        <p className="cuisines-line text-[#ff6f00]">{cuisines?.join(", ")}</p>
        <p className="time-to-reach-line">{sla?.slaString}</p>
        <p className="address-line">
          Add - {locality}, {areaName}, {city}
        </p>
      </div>

      {Object.entries(MenuCategories).map(([categoryName, items]) => (
        <div key={categoryName}>
          <button onClick={() => handleCategoryClick(categoryName)} className="w-150 cursor-pointer mt-8 shadow-gray-600 shadow-md rounded-md">
          <div className="category-heading text-lg font-bold   p-2 px-3 flex justify-between items-center ">
            <span>{categoryName} ({items.length})</span>
            <span className="">{activeCategory === categoryName ? "⬆️" : "⬇️"}</span> 
          </div>
          </button>

          {(activeCategory === categoryName) && items.map((item) => {
            const { id, name, description, price, defaultPrice,ratings, imageId } =
              item.card.info;

           return(<ItemList key={id} {...item.card.info} />)
}
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;

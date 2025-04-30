import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [apidatainfo, setapidatainfo] = useState(null);
  const [menupath, setmenupath] = useState([]);
  const [MenuCategories, setMenuCategories] = useState({});

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=` +
        resId +
        `&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json);
  };

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

  if (apidatainfo === null) {
    return <Shimmer />; // fallback if structure is different
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
    <div className="menu-page">
      <h3 className="menu-page-res-name">{name}</h3>
      <div className="res-info-box">
        <p className="rating-line">
          <span style={{ color: "green" }}>★</span>
          {avgRating || 4.1}({totalRatingsString || `134 ratings` }) - {costForTwoMessage}
        </p>

        <p className="cuisines-line">{cuisines?.join(", ")}</p>
        <p className="time-to-reach-line">{sla.slaString}</p>
        <p className="address-line">
          Add - {locality}, {areaName}, {city}
        </p>
      </div>

      {Object.entries(MenuCategories).map(([categoryName, items]) => (
        <div key={categoryName}>
          <div className="category-heading">
            {categoryName} ({items.length})
          </div>

          {items.map((item) => {
            const { id, name, description, price, ratings, imageId } =
              item.card.info;

            return (
              <div className="dish-card-parent" key={id}>
                <div className="dish-card">
                  <p className="dish-name">{name}</p>
                  <p className="dish-price">₹{price / 100}</p>
                  <p className="rating-line">
                    <span style={{ color: "green" }}>★</span>
                    {ratings?.aggregatedRating?.rating || 4} (
                    {ratings?.aggregatedRating?.ratingCountV2 || 113}{` ratings`}) 
                  </p>
                  <p className="dish-description">
                    {description ||
                      "A thoughtfully prepared dish to satisfy your cravings.Made with care to please your palate. A delightful addition to your meal."}
                  </p>
                </div>
                {imageId && (
                  <div className="dish-image">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;

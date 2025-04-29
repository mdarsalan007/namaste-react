import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=99980&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const apidatainfo = resInfo?.data?.cards[2]?.card?.card?.info;
  const Toppicks =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      .carousel;
  const RecommendedMenu =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards;
  const starters =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      .itemCards;
  const IndianBreads =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      .itemCards;
  const Rice =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card
      .itemCards;
  const MealCombos =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card
      .itemCards;
  const Dal =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card
      .itemCards;
  const maincourseothers =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card
      .categories[0].itemCards;
  const maincoursepaneer =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card
      .categories[1].itemCards;
  const maincourseveg =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card
      .categories[2].itemCards;
  const dessert =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card
      .itemCards;
  const Accompaniments =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[11]?.card?.card
      .itemCards;
  const FriedIndianBreads =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[12]?.card?.card
      .itemCards;
  const Noodles =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[13]?.card?.card
      .itemCards;
  const Thali =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[14]?.card?.card
      .itemCards;
  const completeAddress =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[16]?.card?.card
      .completeAddress;

  if (!apidatainfo) {
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
          {avgRating}({totalRatingsString}) - {costForTwoMessage}
        </p>

        <p className="cuisines-line">{cuisines?.join(", ")}</p>
        <p className="time-to-reach-line">{sla.slaString}</p>
        <p className="address-line">
          Add - {locality}, {areaName}, {city}
        </p>
      </div>
      <div className="category-heading">Top Picks({Toppicks.length})</div>
      {Toppicks?.map((item) => {
        const { name, description, price, imageId } = item.dish.info;
        const { creativeId } = item;
        return (
          <div className="dish-card-parent" key={creativeId}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">
        Recommended({RecommendedMenu.length})
      </div>
      {RecommendedMenu?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">Starters({starters.length})</div>
      {starters?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">
        Indian Breads({IndianBreads.length})
      </div>
      {IndianBreads?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">Rice({Rice.length})</div>
      {Rice?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">Meal Combos({MealCombos.length})</div>
      {MealCombos?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card dish-card-meal-combo">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
          </div>
        );
      })}
      <div className="category-heading">Dal({Dal.length})</div>
      {Dal?.map((item) => {
        console.log(item.card.info);

        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">
        Main Course Others({maincourseothers.length})
      </div>
      {maincourseothers?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">
        Main Course Paneer({maincoursepaneer.length})
      </div>
      {maincoursepaneer?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">
        Main Course Veg({maincourseveg.length})
      </div>
      {maincourseveg?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">Dessert({dessert.length})</div>
      {dessert?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">
        Accompaniments({Accompaniments.length})
      </div>
      {Accompaniments?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">
        Fried Indian Breads({FriedIndianBreads.length})
      </div>
      {FriedIndianBreads?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">Noodles({Noodles.length})</div>
      {Noodles?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
      <div className="category-heading">Thali({Thali.length})</div>
      {Thali?.map((item) => {
        const { id, name, description, price, ratings, imageId } =
          item.card.info;
        return (
          <div className="dish-card-parent" key={id}>
            <div className="dish-card">
              <p className="dish-name">{name}</p>
              <p className="dish-price">₹{price / 100}</p>
              <p className="rating-line">
                <span style={{ color: "green" }}>★</span>
                {ratings.aggregatedRating.rating}(
                {ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="dish-description">{description}</p>
            </div>
            <div className="dish-image">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="res-info">
        <h3>{name}</h3>
        <p>{cuisines?.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>
          ⭐ {avgRating} · 🕒 {sla?.deliveryTime} min
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;

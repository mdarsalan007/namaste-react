import { CLOUDINARY_URL } from "./utils/constants";
const RestaurantCard = (props) => {
  return (
    <div>
      <img src={`${CLOUDINARY_URL}${props.image}`} alt="res-image" />

      <div className="ind-res-details">
        <h3>{props.resName}</h3>
        <p>{props.cuisine}</p>
        <p>{props.deltime}</p>
        <p>{props.rating || 4.1}⭐</p>
        <p>{props.costforTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

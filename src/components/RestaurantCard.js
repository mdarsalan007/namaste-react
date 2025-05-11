import { CLOUDINARY_URL } from "./utils/constants";
const RestaurantCard = (props) => {
  return (
    <div data-testid = "resCard" >
      <img className="w-52 h-38 rounded-lg mt-2 ml-2" src={`${CLOUDINARY_URL}${props.image}`} alt="res-image" />

      <div   className="ind-res-details mx-3 mt-0.5 ">
        <h3 className="font-medium mt-1 text-md">{props.resName}</h3>
        <p className="text-[15px] font-medium text-gray-900">{props.cuisine}</p>
        <p className="text-[15px] font-medium text-gray-900">{props.deltime}</p>
        <p className="text-[15px] font-medium text-gray-900">{props.rating || 4.1}⭐</p>
        <p className="text-[15px] font-medium text-gray-900 mb-1">{props.costforTwo}</p>
      </div>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute ml-1 mt-1 bg-red-700 p-0.5 text-white text-sm font-medium  rounded-sm">PROMOTED</label>
        <RestaurantCard{...props}/>
      </div>
    )
  }
  

}

export default RestaurantCard;

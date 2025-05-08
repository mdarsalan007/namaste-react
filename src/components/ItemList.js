const ItemList = ({id, name, description, price, defaultPrice,ratings, imageId})=>{
    return (
        <div className="dish-card-parent flex  justify-between w-150   px-2 bg-gray-100 rounded-md  mt-4  shadow-md shadow-gray-600" key={id}>
          <div className="dish-card flex flex-col  w-110 px-2 py-1">
            <p className="dish-name font-medium text-lg">{name}</p>
            <p className="dish-price font-bold text-sm">₹{price/100 ||defaultPrice / 100}</p>
            <p className="rating-line font-medium text-sm">
              <span style={{ color: "green" }}>★</span>
              {ratings?.aggregatedRating?.rating || 4} (
              {ratings?.aggregatedRating?.ratingCountV2 || 113}{` ratings`}) 
            </p>
            <p className="dish-description font-medium text-neutral-900 text-sm">
              {description ||
                "A thoughtfully prepared dish to satisfy your cravings.Made with care to please your palate. A delightful addition to your meal."}
            </p>
          </div>
          {imageId && (
            <div className="dish-image w-40 flex justify-center items-center ">
              <img className=" w-35 h-30 my-2 rounded-md"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              />
            </div>
          )}
        </div>
      );
}

export default ItemList;
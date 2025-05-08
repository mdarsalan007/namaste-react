import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import cities from "./utils/cities";


const Header = ({ onCityChange }) => {
  const [btnName, setbtnName] = useState("Login");
  // setbtnName("Login");
  const onlineStatus = useOnlineStatus();



  const handleCityChange = (value) => {
    const [lat, lng] = value.split(",");  // split value string into lat and lng
    const newCity = { lat: parseFloat(lat), lng: parseFloat(lng) };
    onCityChange(newCity);  // pass to parent AppLayout
  };

  return (
    <div className= "flex justify-between items-center mt-2 bg-blue-100 sticky top-0 z-10">
      <div className="">
        <img className="h-12 ml-2 p-1 rounded-2xl" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="mx-4 text-[15px] font-medium ">
            <select className="bg-[#ffa938] border-0 outline-0 rounded-sm h-7 cursor-pointer" onChange={(e) => handleCityChange(e.target.value)}>
              {cities.map((city) => (
                <option className="bg-amber-200" key={city.city} value={`${city.lat},${city.lng}`}>
                  {city.city}
                </option>
              ))}
            </select>
          </li>
          <li className="mx-4 text-[15px] font-medium ">Online:{onlineStatus ? "✅" : "❌"}</li>
          <li className="mx-4 text-[15px] font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-[15px] font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4 text-[15px] font-medium">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4 text-[15px] font-medium">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-4 text-[15px] font-medium cursor-pointer">Cart</li>
          <button
             className="mx-4 text-[15px] font-medium mr-6 w-20 bg-[#ffa938] border-0 outline-0 rounded-sm h-7 cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

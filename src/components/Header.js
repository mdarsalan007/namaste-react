import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import cities from "./utils/cities";


const Header = ({ onCityChange }) => {
  const [btnName, setbtnName] = useState("Login");
  // setbtnName("Login");
  const onlineStatus = useOnlineStatus();


  // const handleCityChange = (e) => {
  //   const [lat, lng] = e.target.value.split(",");  // Split the lat and lng values
  //   const newCity = { lat: parseFloat(lat), lng: parseFloat(lng) };
  //   onCityChange(newCity);  // Notify parent component
  // };


  const handleCityChange = (value) => {
    const [lat, lng] = value.split(",");  // split value string into lat and lng
    const newCity = { lat: parseFloat(lat), lng: parseFloat(lng) };
    onCityChange(newCity);  // pass to parent AppLayout
  };

  return (
    <div className= "flex ">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <select className="city-select" onChange={(e) => handleCityChange(e.target.value)}>
              {cities.map((city) => (
                <option key={city.city} value={`${city.lat},${city.lng}`}>
                  {city.city}
                </option>
              ))}
            </select>
          </li>
          <li>Online:{onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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

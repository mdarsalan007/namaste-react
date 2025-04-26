import React from "react";
import ReactDOM from "react-dom/client";


const Header = ()=>{
    return(
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yPxmHYHF8tgtmWhpC59Jk2PLpzbxaL-9bA&s" alt="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

const RestaurantCard = ()=>{
    
}

const Body = ()=>{
    return(
        <div class="body">
        <div class="search">Search</div>

        <div class="res-container">
            {/* restaurant-card */}
             
        </div>
    </div>
    )
}

const AppLayout = ()=>{
    return <div className="app">
        <Header/>

    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

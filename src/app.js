import React, { lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutWrapper from "./components/AboutWrapper";
import Contact from "./components/Contact";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState } from "react";


const Grocery = lazy(()=>import("./components/Grocery"));

// const Grocery = lazy(() => {
//   return import("./components/Grocery");
// });
// this would also work. but make sure to write return in that



const AppLayout = () => {
  const [selectedCity, setSelectedCity] = useState({
    lat: 28.7040592, 
    lng: 77.10249019999999,
  });
  return (
    <div className="app">
      <Header onCityChange={setSelectedCity}  />
      <Outlet className="font-sans" context={{ selectedCity }} />  {/* Pass selected city to children */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout  />,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <AboutWrapper/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path:"/grocery",
        element: (<Suspense fallback = {<h2>Loading...</h2>}><Grocery/></Suspense>)
      }
    ],
    errorElement: <Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

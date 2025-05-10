import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/mock.restaurantcard"// no use coz i have passed it directly 

import "@testing-library/jest-dom";


test("check if restaurant card is rendered with props or not",()=>{
    render(
        <RestaurantCard 
    image="sample-img-id"
    resName="Rajdharam Restaurant"
    cuisine="Indian, Chinese"
    rating="4.1"
    deltime="30 mins"
    costforTwo="₹400 for two"
  />
    )

    const name = screen.getByText("Rajdharam Restaurant");
    expect(name).toBeInTheDocument();
})
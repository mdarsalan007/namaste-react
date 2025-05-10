import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
test("check is restaurant card is rendered with promote label or not",()=>{
    render (<PromotedRestaurantCard 
    />)

    const label = screen.getByText("PROMOTED");
    expect(label).toBeInTheDocument();
    
})
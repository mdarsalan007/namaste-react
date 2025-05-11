import { fireEvent, render , screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import {act} from "react"
import MOCK_DATA from "../mocks/mock.bikanerMenu.json";
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import * as ReactRouterDom from "react-router-dom";

// before your test:
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: jest.fn()
}));

ReactRouterDom.useOutletContext.mockReturnValue({
  selectedCity: "Delhi"
});

global.fetch = jest.fn(()=>
    Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    })
)

it("should load restaurant menu component" ,async()=>{
   await act(async () =>
  render(
    <Provider store={appStore}>
      <RestaurantMenu />
    </Provider>
  )
);
const accordionHeader = screen.getByText(/Beverages/);
fireEvent.click(accordionHeader);

expect(screen.getAllByTestId("foodItems").length).toBe(14);
})


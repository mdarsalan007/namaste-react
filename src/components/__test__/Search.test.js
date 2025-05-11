import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { MemoryRouter, Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mock.bodyapi.json"
import { act } from "react";
import '@testing-library/jest-dom';



global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: ()=>{
      return Promise.resolve(MOCK_DATA);
    }
  })
})

// Create a wrapper component with Outlet context
function MockOutletContextProvider({ children }) {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route
          path="/"
          element={<Outlet context={{ selectedCity: "SomeCity" }} />}
        >
          <Route index element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

it("should render the body comp. with Search", async () => {
  await act(async ()=> render(
    <MockOutletContextProvider>
      <Body />
    </MockOutletContextProvider>
    
  ));
  

  // const searchBtn = screen.getByRole("button", { name: "Search" });
  const filterBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  // const searchInput = screen.getByTestId("SearchInput");

  // fireEvent.change(searchInput, {target:{value:"food"}}); // for delhi
  // fireEvent.click(searchBtn);
  fireEvent.click(filterBtn);

  const cards = screen.getAllByTestId("resCard");

  // expect(cards.length).toBe(2); /// to match these numbers u have have to use the current api json as MOCK_DATA <-- important
  expect(cards.length).toBe(14);
});

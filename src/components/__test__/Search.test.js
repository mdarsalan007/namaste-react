import { render, screen } from "@testing-library/react";
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
  

  const search = screen.getByText("Search");
  expect(search).toBeInTheDocument();
});

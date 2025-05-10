import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contsct us page test caese", ()=>{

  test('should load contact component', () => {
  render(<Contact/>)

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
})
 
it('should load button inside contact component', () => {
  render(<Contact/>)

  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
})
 
})


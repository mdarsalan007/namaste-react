import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

test("should load header on the page" , ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const Loginbutton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(Loginbutton);
    const LogOutbutton = screen.getByRole("button",{name:"LogOut"});

    expect(LogOutbutton).toBeInTheDocument();
})

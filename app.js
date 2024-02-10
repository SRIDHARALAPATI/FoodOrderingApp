import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./src/components/Cart";

const AppLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  );
};
const appRoute= createBrowserRouter([
  {
    path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
    element:<Body/>
    },
    {
      path:"/about",
    element:<About/>
    },
    {
      path:"/contact",
    element:<Contact/>
    },
    {
      path:"/cart",
    element:<Cart/>
    }
  ],
  errorElement:<Error/>
  
}

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);

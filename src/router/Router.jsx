import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Shop from "../pages/Home/Shop"; 
import AboutUs from "../pages/Home/AboutUs"; 
import Blog from "../pages/Home/Blog"; 
import Contact from "../pages/Home/Contact"; 
import Account from "../pages/Home/Account"; 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />, 
      },
      {
        path: "/contact",
        element: <Contact />, 
      },
      {
        path: "/account",  
        element: <Account />, 
      },
    ],
  },
]);

export default router;

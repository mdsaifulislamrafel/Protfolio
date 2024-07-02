import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Home from "../pages/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Home/>,
              },
              {
                path: "/about",
                element: <About/>,
              },
              {
                path: "/skills",
                element: <Skills/>,
              },
              {
                path: "/services",
                element: <Services/>,
              },
              {
                path: "/portfolio",
                element: <Portfolio/>,
              },
              {
                path: "/contact",
                element: <Contact/>,
              },
        ]
    }
  ]);

export default router
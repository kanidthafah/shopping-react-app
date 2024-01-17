import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './pages/Home/Home.jsx'
import OutfitIdeas from './pages/OutfitIdeas.jsx';
import Shop from './pages/Shop/Shop.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx';
import SingleProduct from './pages/SingleProduct.jsx';


const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/outfit-ideas",
        element: <OutfitIdeas/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/shop/:id",
        element: <SingleProduct/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      }

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

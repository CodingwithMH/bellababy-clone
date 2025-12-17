import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ShopCategory from "../pages/ShopCategory"
import LandingPage from "../pages/LandingPage"
import CategoryProduct from "../pages/CategoryProduct"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"",
          element:<LandingPage/>
        },
        {
          path:"/category/:categoryName",
          element:<ShopCategory/>
        },
        {
          path:"/product/:productName",
          element:<CategoryProduct/>
        },
      ]
    }
  ]
)

export default router

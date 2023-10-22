import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/brands')
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/brands')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, 
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            }, 
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }, 
            {
                path: '/products/:name',
                element: <BrandProducts></BrandProducts>
            }
        ]
    }
]);

export default router;
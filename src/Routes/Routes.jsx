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
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/ProductDetails/ProductsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tech-hunt-server.vercel.app/brands')
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                loader: () => fetch('https://tech-hunt-server.vercel.app/brands')
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
                path: '/myCart/:uid',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ({params}) => fetch(`https://tech-hunt-server.vercel.app/users/${params.uid}`)
            }, 
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }, 
            {
                path: '/products',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: () => fetch('https://tech-hunt-server.vercel.app/products')
            },
            {
                path: '/product/:id',
                loader: ({params}) => fetch(`https://tech-hunt-server.vercel.app/product/${params.id}`),
                element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>
            },
            {
                path: '/products/:name',
                element: <BrandProducts></BrandProducts>,
                loader: ({params}) => fetch(`https://tech-hunt-server.vercel.app/products/${params.name}`)
            }
        ]
    }
]);

export default router;
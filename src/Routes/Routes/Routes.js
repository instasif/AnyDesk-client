import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Home from "../../Pages/Home/Home/Home";
import Items from "../../Pages/Home/Items/Items";
import Login from "../../Pages/Login/Login";
import Myorders from "../../Pages/Myorders/Myorders";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../adminroute/AdminRoute";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><Items/></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            
        ]
    },
    {
        path: '/myorders',
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
        children: [
            {
                path: '/myorders',
                element: <Myorders></Myorders>
            },
            {
                path: '/myorders/allusers',
                // element: <AdminRoute><AllUsers/></AdminRoute>
                element: <AllUsers/> 
            },
        ]
    }
]);
export default router;
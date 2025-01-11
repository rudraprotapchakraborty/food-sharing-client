import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import AddFood from "../pages/AddFood/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/available-foods",
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: "/add-food",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/manage-my-foods",
                element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
            },
            {
                path: "/my-food-request",
                element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
            },
            {
                path: "/foods/:id",
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://food-sharing-server-theta.vercel.app/foods/${params.id}`)
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/layouts/DefaultLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import HomePageManager from "../pages/admin/homePage/HomePageManager";
import CategoriePage from "../pages/categoriePage/CategoriePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "register",
                element: <RegisterPage/>
            },  
            {
                path: "categories/:categoryId", 
                element: <CategoriePage/>
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "homePage/HomePageManager",
                element: <HomePageManager/>
            }
        ]
    }
]);

export default router;
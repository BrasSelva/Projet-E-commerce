import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/layouts/DefaultLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import HomePageManager from "../pages/admin/homePage/HomePageManager";
import CategorieDetails from "../pages/categoriePage/CategorieDetails";
import CategorieList from "../pages/categoriePage/CategorieList";
import ImageList from "../pages/admin/ImageManager/ImageList";
import SearchPage from "../pages/searchPage/SearchPage";
import ProductPage from "../pages/productPage/ProductPage";
import ImageAdd from "../pages/admin/ImageManager/ImageAdd";
import ImageEdit from "../pages/admin/ImageManager/ImageEdit";
import CategoryList from "../pages/admin/CategoryManager/CategoryList";
import CategoryAdd from "../pages/admin/CategoryManager/CategoryAdd";
import CategoryEdit from "../pages/admin/CategoryManager/CategoryEdit";
import ProductPage from "../pages/productsPage/ProductPage";

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
                path: "search",
                element: <SearchPage/>
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
                element: <CategorieDetails/>
            },
            {
                path: "categories", 
                element: <CategorieList/>
            },
            {
                path: "product", 
                element: <ProductPage/>
            },
            {
                path: "product/:productId", 
                element: <ProductPage/>
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "HomePageManager",
                element: <HomePageManager/>
            },
            {
                path: "ImageManager",
                element: <ImageList/>
            },
            {
                path: "ImageManager/Add",
                element: <ImageAdd/>
            },
            {
                path: "ImageManager/Edit/:imageId",
                element: <ImageEdit/>
            },
            {
                path: "CategoryManager",
                element: <CategoryList/>
            },
            {
                path: "CategoryManager/Add",
                element: <CategoryAdd/>
            },
            {
                path: "CategoryManager/Edit/:categoryId",
                element: <CategoryEdit/>
            }
        ]
    }
]);

export default router;
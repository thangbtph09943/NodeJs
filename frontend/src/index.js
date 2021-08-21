import Error404Page from "./Error404Page.js";
import HomePage from "./pages/HomePage.js";
import ProductDetail from "./pages/ProductDetail.js";
import ProductsPage from "./pages/ProductsPage.js";
import { parseRequestUrl, $ } from "./utils.js";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage.js";
import ProductAddPage from "./pages/ProductAddPage.js";
import AdminProductPage from "./pages/AdminProductPage.js";
import ProductEditPage from "./pages/ProductEditPage.js";
import CategoryAddPage from "./pages/CategoryAddPage.js";
import AdminCategory from './pages/AdminCategory';
import signinPage from "./pages/signinPage.js";
import signupPage from "./pages/signupPage.js";

const routes = {
    '/': HomePage,
    '/products' : ProductsPage,
    '/products/:id' : ProductDetail,
    '/category/:id' : CategoryPage,
    '/addproduct' : ProductAddPage,
    '/addcategory' : CategoryAddPage,
    '/listproduct' : AdminProductPage,
    '/editproduct/:id' : ProductEditPage,
    '/signin' : signinPage,
    '/signup' : signupPage,
    '/listcategory' : AdminCategory,
    

}

const router = async () => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') +
        (id ? `/:id` : '');
 
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page
    $('#header').innerHTML = await Header.render(); 
    $('#main-content').innerHTML = await page.render();
    if (page.afterRender) {
        await page.afterRender();
    }

}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);

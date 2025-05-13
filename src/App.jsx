import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Categories from './pages/Categories';
import Brands from './pages/Brands';
import FilteredProducts from './pages/FilteredProducts';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import AdminProducts from './pages/Admin/Products';
import AdminCategories from './pages/Admin/Categories';
import AdminBrands from './pages/Admin/Brands';

import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<UserLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/brands" element={<Brands />} />
                        <Route
                            path="/filtered-products"
                            element={<FilteredProducts />}
                        />
                        <Route
                            path="/product/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route
                            path="/order/payment-methoud"
                            element={<Checkout />}
                        />
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route
                            path="/admin/products"
                            element={<AdminProducts />}
                        />
                        <Route
                            path="/admin/categories"
                            element={<AdminCategories />}
                        />
                        <Route path="/admin/brands" element={<AdminBrands />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

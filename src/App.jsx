import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Footer from './sections/Footer';
import MainNavbar from './components/MainNavbar';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AllCategories from './pages/AllCategories';
import AllBrands from './pages/AllBrands';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainNavbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/all-categories" element={<AllCategories />} />
                    <Route path="/all-brands" element={<AllBrands />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;

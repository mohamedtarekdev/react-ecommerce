import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Footer from './sections/Footer';
import MainNavbar from './components/MainNavbar';
import Login from './pages/Login';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainNavbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;

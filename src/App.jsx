import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Footer from './sections/Footer';
import MainNavbar from './components/MainNavbar';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainNavbar />
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../Home";
import RecipeDetail from "../RecipeDetail";
import NavBar from "../NavBar";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/login" />
            </Routes>
        </Router>
    );
};

export default App;

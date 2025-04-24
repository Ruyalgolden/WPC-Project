import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Nav from './Nav.js';
import Footer from './footer.js';
import Home from './pages/Homepage.js';
import Courses from './pages/Courses.js';
import Profile from './pages/Profile.js';
import Leaderboard from './pages/Leaderboard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

// https://www.w3schools.com/react/react_router.asp
reportWebVitals();

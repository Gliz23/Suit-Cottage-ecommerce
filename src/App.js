import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Blog, Possibility, Trousers, Wedding, Shirts, Features, WhatGPT3, Header, Footer, CartPage } from './containers';
import './App.css';


const App = () => {
  const [activeTab, setActiveTab] = useState('sale');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Navigate to the corresponding route
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <WhatGPT3 />
              <Footer />
            </>
          }
        />
        <Route
          path="/casual"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <Features />
              <Footer />
            </>
          }
        />
        <Route
          path="/sale"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <WhatGPT3 />
              <Footer />
            </>
          }
        />
        <Route
          path="/suit"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <Possibility />
              <Footer />
            </>
          }
        />
        <Route
          path="/jacket"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/shirts"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <Shirts />
              <Footer />
            </>
          }
        />
        <Route
          path="/trousers"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <Trousers/>
              <Footer />
            </>
          }
        />
        <Route
          path="/wedding"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <Wedding />
              <Footer />
            </>
          }
        />
      
      <Route
          path="/wedding"
          element={
            <>
              <Header activeTab={activeTab} handleTabClick={handleTabClick} />
              <CartPage />
              <Footer />
            </>
          }
        />
       </Routes>
    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';

import Home from './components/Home';
import Search from './components/Search';
<<<<<<< HEAD
import Header from './components/Header/Header';
=======
>>>>>>> main

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
<<<<<<< HEAD
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/search/:path" element={<Search />}>Search</Route>
=======
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
>>>>>>> main
        </Routes>
      </Router>
    </>
  );
}

export default App;

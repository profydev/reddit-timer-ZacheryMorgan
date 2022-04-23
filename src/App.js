import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';

import Home from './components/Home';
import Search from './components/Search';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/search/:path" element={<Search />}>Search</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

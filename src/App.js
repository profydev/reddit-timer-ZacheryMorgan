import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';

import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

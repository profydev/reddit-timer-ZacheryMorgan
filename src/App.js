import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import StyledHeading from './HeadingStyled';

function App() {
  return (
    <Router>
      <>
        <GlobalStyle />
        <StyledHeading>Hello</StyledHeading>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/search" element={<Search />} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;

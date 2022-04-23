import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeader from './StyledHeader';
import StyledHeaderLinks from './StyledHeaderLinks';
import StyledHeaderList from './StyledHeaderList';

const Header = () => (

  <StyledHeader>
    <Link to="/">
      <img src="/assets/logo.svg" alt="logo" width="150" height="36" />
    </Link>
    <StyledHeaderList>
      <Link to="/search/javascript">
        <StyledHeaderLinks>Search</StyledHeaderLinks>
      </Link>
      <StyledHeaderLinks><a href="#how-it-works">How it works</a></StyledHeaderLinks>
      <StyledHeaderLinks><a href="#about">About</a></StyledHeaderLinks>
    </StyledHeaderList>
  </StyledHeader>

);

export default Header;

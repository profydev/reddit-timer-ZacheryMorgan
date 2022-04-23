import React from 'react';

import StyledHeader from './StyledHeader';
import StyledHeaderLinks from './StyledHeaderLinks';
import StyledHeaderList from './StyledHeaderList';

const Header = () => (

  <StyledHeader>
    <img src="./assets/logo.svg" alt="logo" width="150" height="36" />
    <StyledHeaderList>
      <StyledHeaderLinks>Search</StyledHeaderLinks>
      <StyledHeaderLinks>How it works</StyledHeaderLinks>
      <StyledHeaderLinks>About</StyledHeaderLinks>
    </StyledHeaderList>
  </StyledHeader>

);

export default Header;

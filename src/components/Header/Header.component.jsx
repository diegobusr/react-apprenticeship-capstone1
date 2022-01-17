import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import LoginButton from './LoginButton';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import LeftSideHeader from './LeftSideHeader';
import RightSideHeader from './RigthSideHeader';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  flex-wrap: wrap;
  background-color: #501d7a;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <Navbar>
      <LeftSideHeader>
        <BurgerMenu />
        <SearchBar />
      </LeftSideHeader>
      <RightSideHeader>
        <ThemeToggle />
        <LoginButton />
      </RightSideHeader>
    </Navbar>
  );
};

export default Header;

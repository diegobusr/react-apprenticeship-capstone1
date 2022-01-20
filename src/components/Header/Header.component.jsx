import React from 'react';
import BurgerMenu from './BurgerMenu';
import LoginButton from './LoginButton';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import LeftSideHeader from './LeftSideHeader';
import RightSideHeader from './RigthSideHeader';
import { Navbar } from './Header.styles';

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

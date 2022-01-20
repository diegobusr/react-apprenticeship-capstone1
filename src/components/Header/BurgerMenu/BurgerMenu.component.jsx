import React, { useContext } from 'react';
import { GlobalContext } from '../../App/App.component';
import { MenuIcon } from './BurgerMenu.styles';

const BurgerMenu = () => {
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  return <MenuIcon darkThemeOn={darkThemeOn} data-testid="BurgerMenu" />;
};

export default BurgerMenu;

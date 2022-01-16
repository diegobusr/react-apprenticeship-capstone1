import React from 'react';
import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

const MenuIcon = styled(Menu)`
  color: white;
  min-width: 38px;
  height: 38px;
`;

const BurgerMenu = () => {
  return <MenuIcon data-testid="BurgerMenu" />;
};

export default BurgerMenu;

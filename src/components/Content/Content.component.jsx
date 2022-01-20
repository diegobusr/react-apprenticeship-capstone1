import React, { useContext } from 'react';
import { GlobalContext } from '../App/App.component';
import { CustomDiv } from './Content.styles';

const Content = ({ children }) => {
  const { darkThemeOn } = useContext(GlobalContext).appContext;

  return <CustomDiv darkThemeOn={darkThemeOn}>{children}</CustomDiv>;
};

export default Content;

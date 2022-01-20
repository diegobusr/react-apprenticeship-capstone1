import React, { useContext } from 'react';
import { GlobalContext } from '../../App/App.component';
import { LeftSideDiv } from './LeftSideContent.styles';

const LeftSideContent = ({ children }) => {
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  return <LeftSideDiv darkThemeOn={darkThemeOn}>{children}</LeftSideDiv>;
};

export default LeftSideContent;

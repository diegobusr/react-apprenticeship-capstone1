import React, { useContext } from 'react';
import { GlobalContext } from '../../App/App.component';
import { RightSideDiv } from './RightSideContent.styles';

const RightSideContent = ({ children }) => {
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  return <RightSideDiv darkThemeOn={darkThemeOn}>{children}</RightSideDiv>;
};

export default RightSideContent;

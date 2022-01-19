import React from 'react';
import { LeftSideDiv } from './LeftSideHeader.styles';

const LeftSideHeader = ({ children }) => {
  return <LeftSideDiv>{children}</LeftSideDiv>;
};

export default LeftSideHeader;

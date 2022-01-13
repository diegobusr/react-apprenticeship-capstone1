import React from 'react';
import styled from 'styled-components';

const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Content = ({ children }) => {
  return <CustomDiv>{children}</CustomDiv>;
};

export default Content;

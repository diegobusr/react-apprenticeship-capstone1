import React from 'react';
import styled from 'styled-components';

const LeftSideDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 15px;
  padding: 5px;
  align-items: center;

  input {
    margin-left: 50px;
  }

  svg {
    margin-left: 15px;
  }
`;

const LeftSideHeader = ({ children }) => {
  return <LeftSideDiv>{children}</LeftSideDiv>;
};

export default LeftSideHeader;

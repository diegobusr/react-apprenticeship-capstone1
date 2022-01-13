import React from 'react';
import styled from 'styled-components';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';

const CustomButton = styled(PersonCircle)`
  color: white;
  width: 50px;
  height: 50px;
`;

const LoginButton = () => {
  return <CustomButton></CustomButton>;
};

export default LoginButton;

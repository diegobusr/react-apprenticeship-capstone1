import React, { useContext } from 'react';
import { GlobalContext } from '../../App/App.component';
import { CustomButton } from './LoginButton.styles';

const LoginButton = () => {
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  return <CustomButton darkThemeOn={darkThemeOn} data-testid="LoginButton" />;
};

export default LoginButton;

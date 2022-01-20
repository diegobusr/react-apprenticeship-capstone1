import React, { useContext } from 'react';
import { types } from '../../../utils/reducer';
import { GlobalContext } from '../../App/App.component';
import { Input, Switch, Label } from './ThemeToggle.styles';

const ThemeToggle = () => {
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  const { setAppContext } = useContext(GlobalContext);

  const handleChange = () => {
    setAppContext({
      type: types.THEME_TOGGLE,
      payload: !darkThemeOn,
    });
  };

  return (
    <Label>
      <Input checked={darkThemeOn} type="checkbox" onChange={handleChange} />
      <Switch />
      <span style={{ color: 'white' }}>Dark mode</span>
    </Label>
  );
};

export default ThemeToggle;

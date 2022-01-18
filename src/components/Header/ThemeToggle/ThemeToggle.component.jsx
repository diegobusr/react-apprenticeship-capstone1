import React from 'react';
import { useState } from 'react';
import { Input, Switch, Label } from './ThemeToggle.styles';

const ThemeToggle = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
      <span style={{ color: 'white' }}>Dark mode</span>
    </Label>
  );
};

export default ThemeToggle;

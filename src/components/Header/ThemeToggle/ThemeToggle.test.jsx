import React from 'react';
import ThemeToggle from '.';
import { render } from '@testing-library/react';

describe('ThemeToggle', () => {
  it('must render the button that changes the theme', () => {
    const { getByRole } = render(<ThemeToggle />);
    expect(getByRole('checkbox')).toBeInTheDocument();
  });
});

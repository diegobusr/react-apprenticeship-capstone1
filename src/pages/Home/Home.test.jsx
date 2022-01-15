import React from 'react';
import Home from './';
import { render } from '@testing-library/react';

describe('Home page', () => {
  it('must render the home view', () => {
    const { getByTestId, getByRole } = render(<Home />);

    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByRole('checkbox')).toBeInTheDocument();
    expect(getByTestId('BurgerMenu')).toBeInTheDocument();
    expect(getByTestId('LoginButton')).toBeInTheDocument();
  });
});

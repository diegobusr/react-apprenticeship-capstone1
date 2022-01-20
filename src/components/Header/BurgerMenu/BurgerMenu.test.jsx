import React from 'react';
import BurgerMenu from './BurgerMenu.component';
import { render } from '@testing-library/react';

describe('BurgerMenu', () => {
  it('must render a burger menu button', () => {
    const { getByTestId } = render(<BurgerMenu />);
    expect(getByTestId('BurgerMenu')).toBeInTheDocument();
  });
});

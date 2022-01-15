import React from 'react';
import LeftSideHeader from './LeftSideHeader.component';
import BurgerMenu from '../BurgerMenu';
import SearchBar from '../SearchBar';
import { render } from '@testing-library/react';

describe('LeftSideHeader', () => {
  it('must render a the left part of the header', () => {
    const { getByTestId, getByRole } = render(
      <LeftSideHeader>
        <BurgerMenu />
        <SearchBar />
      </LeftSideHeader>
    );

    expect(getByTestId('BurgerMenu')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });
});

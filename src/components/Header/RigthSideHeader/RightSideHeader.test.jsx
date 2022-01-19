import React from 'react';
import RightSideHeader from './RightSideHeader.component';
import ThemeToggle from '../ThemeToggle';
import LoginButton from '../LoginButton';
import { render } from '@testing-library/react';

describe('RightSideHeader', () => {
  it('must render a the right part of the header', () => {
    const { getByTestId, getByRole } = render(
      <RightSideHeader>
        <ThemeToggle />
        <LoginButton />
      </RightSideHeader>
    );

    expect(getByTestId('LoginButton')).toBeInTheDocument();
    expect(getByRole('checkbox')).toBeInTheDocument();
  });
});

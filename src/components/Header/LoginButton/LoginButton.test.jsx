import React from 'react';
import { render } from '@testing-library/react';
import LoginButton from './LoginButton.component';

describe('LoginButton', () => {
  it('must render the login button', () => {
    const { getByTestId } = render(<LoginButton />);
    expect(getByTestId('LoginButton')).toBeInTheDocument();
  });
});

import React from 'react';
import Header from './Header.component';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('must render the header', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Dark mode')).toBeInTheDocument();
  });
});

import React from 'react';
import Home from './';
import { render } from '@testing-library/react';

describe('Home page', () => {
  it('must render the home view', () => {
    const { getByRole } = render(<Home />);

    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('heading')).toBeInTheDocument();
  });
});

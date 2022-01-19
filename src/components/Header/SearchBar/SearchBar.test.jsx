import React from 'react';
import SearchBar from '../SearchBar';
import { render } from '@testing-library/react';

describe('SearchBar', () => {
  it('must render the search bar', () => {
    const { getByRole } = render(<SearchBar />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });
});

import React from 'react';
import SearchBar from '../SearchBar';
import { render } from '@testing-library/react';
import { GlobalContext } from '../../App/App.component';

describe('SearchBar', () => {
  it('must render the search bar', () => {
    const setAppContext = jest.fn();
    const { getByRole } = render(
      <GlobalContext.Provider value={{ setAppContext }}>
        <SearchBar />
      </GlobalContext.Provider>
    );
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(setAppContext).not.toHaveBeenCalled();
  });
});

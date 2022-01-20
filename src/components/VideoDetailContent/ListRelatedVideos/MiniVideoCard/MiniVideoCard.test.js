import React from 'react';
import { render } from '@testing-library/react';
import mockData from '../../../../utils/youtube-videos-mock.json';
import MiniVideoCard from './MiniVideoCard.component';
import { MemoryRouter } from 'react-router-dom';
import { GlobalContext } from '../../../App/App.component';

describe('MiniVideoCard', () => {
  it('must render the mini video card', () => {
    const AppContext = jest.fn();
    const { getByAltText, getByRole } = render(
      <GlobalContext.Provider value={{ AppContext }}>
        <MemoryRouter initialEntries={['/watch/test']}>
          <MiniVideoCard infoVideo={mockData.items[1]} />
        </MemoryRouter>
      </GlobalContext.Provider>
    );
    expect(getByAltText('thumbnail-nmXMgqjQzls')).toBeInTheDocument();
    expect(getByRole('heading')).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import mockData from '../../../../utils/youtube-videos-mock.json';
import MiniVideoCard from './MiniVideoCard.component';
import { MemoryRouter } from 'react-router-dom';

describe('MiniVideoCard', () => {
  it('must render the mini video card', () => {
    const { getByAltText, getByRole } = render(
      <MemoryRouter>
        <MiniVideoCard infoVideo={mockData.items[1]} />
      </MemoryRouter>
    );
    expect(getByAltText('thumbnail-nmXMgqjQzls')).toBeInTheDocument();
    expect(getByRole('heading')).toBeInTheDocument();
  });
});

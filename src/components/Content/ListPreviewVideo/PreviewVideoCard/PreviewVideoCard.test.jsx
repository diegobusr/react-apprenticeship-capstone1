import React from 'react';
import PreviewVideoCard from './PreviewVideoCard.component';
import { render } from '@testing-library/react';
import mockData from '../../../../utils/youtube-videos-mock.json';
import { MemoryRouter, Route } from 'react-router-dom';

describe('PreviewVideoCard', () => {
  it('must render the card', () => {
    const { getByAltText, getByRole, getByText } = render(
      <MemoryRouter initialEntries={['/watch/test']}>
        <Route exact path={'/watch/:videoId'}>
          <PreviewVideoCard infoVideo={mockData.items[1]} />
        </Route>
      </MemoryRouter>
    );

    expect(getByAltText('thumbnail')).toBeInTheDocument();
    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByText(/Follow Hector Padilla/i)).toBeInTheDocument();
  });
});

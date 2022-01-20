import React from 'react';
import { render, waitFor } from '@testing-library/react';
import mockData from '../../../utils/youtube-videos-mock.json';
import { MemoryRouter, Route } from 'react-router';
import LeftSideContent from './LeftSideContent.component';
import VideoReproducer from '../VideoReproducer/VideoReproducer.component';

describe('LeftSideContent', () => {
  test('must render a the right side content of the view', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const { getAllByRole, getByTitle } = render(
      <MemoryRouter initialEntries={['/watch/test']}>
        <Route exact path={'/watch/:videoId'}>
          <LeftSideContent>
            <VideoReproducer />
          </LeftSideContent>
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getAllByRole('heading').length).not.toBe(0));
    await waitFor(() => expect(getAllByRole('heading').length).toBe(1));
    await waitFor(() =>
      expect(getByTitle('Youtube embed')).toBeInTheDocument()
    );
  });
});

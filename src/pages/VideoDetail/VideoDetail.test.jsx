import React from 'react';
import VideoDetail from './VideoDetail.page';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import mockData from '../../utils/youtube-videos-mock.json';

describe('VideoDetail', () => {
  test('must render the video detail view', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const { getByAltText, getByTitle } = render(
      <MemoryRouter initialEntries={['/watch/test']}>
        <Route exact path={'/watch/:videoId'}>
          <VideoDetail />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    await waitFor(() =>
      expect(getByAltText('thumbnail-undefined')).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(getByTitle('Youtube embed')).toBeInTheDocument()
    );
  });
});

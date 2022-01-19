import React from 'react';
import ListRelatedVideos from './ListRelatedVideos.component';
import { render, waitFor } from '@testing-library/react';
import mockData from '../../../utils/youtube-videos-mock.json';
import { MemoryRouter, Route } from 'react-router';

describe('ListRelatedVideos', () => {
  test('must render a the related video list', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const { getAllByRole } = render(
      <MemoryRouter initialEntries={['/watch/test']}>
        <Route exact path={'/watch/:videoId'}>
          <ListRelatedVideos />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getAllByRole('heading').length).not.toBe(0));
    await waitFor(() => expect(getAllByRole('heading').length).toBe(25));
  });
});

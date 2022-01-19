import React from 'react';
import { render, waitFor } from '@testing-library/react';
import mockData from '../../utils/youtube-videos-mock.json';
import { MemoryRouter, Route } from 'react-router';
import VideoDetailContent from '.';

describe('VideoDetailContent', () => {
  test('must render a the related video list', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const { getAllByRole, getByAltText } = render(
      <MemoryRouter initialEntries={['/watch/test']}>
        <Route exact path={'/watch/:videoId'}>
          <VideoDetailContent />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(getAllByRole('heading').length).not.toBe(0));
    await waitFor(() => expect(getAllByRole('heading').length).toBe(26));
    expect(getByAltText('thumbnail-nmXMgqjQzls')).toBeInTheDocument();
  });
});

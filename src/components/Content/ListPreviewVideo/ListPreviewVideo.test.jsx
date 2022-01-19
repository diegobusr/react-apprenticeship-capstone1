import React from 'react';
import ListPreviewVideo from './ListPreviewVideo.component';
import { render, waitFor } from '@testing-library/react';
import mockData from '../../../utils/youtube-videos-mock.json';
import { MemoryRouter, Route } from 'react-router-dom';

describe('ListPreviewVideo', () => {
  test('must render a the view of cards', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const { getAllByAltText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Route exact path={'/'}>
          <ListPreviewVideo />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(getAllByAltText('thumbnail').length).not.toBe(0)
    );
    await waitFor(() => expect(getAllByAltText('thumbnail').length).toBe(25));
  });
});

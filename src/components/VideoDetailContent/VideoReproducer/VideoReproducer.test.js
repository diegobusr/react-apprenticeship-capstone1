import React from 'react';
import { render, waitFor } from '@testing-library/react';
import mockData from '../../../utils/youtube-videos-mock.json';
import { MemoryRouter, Route } from 'react-router';
import VideoReproducer from './VideoReproducer.component';
import { GlobalContext } from '../../App/App.component';

describe('VideoReproducer', () => {
  test('must render a the video reproducer view', async () => {
    const AppContext = jest.fn();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const { getAllByRole, getByTitle } = render(
      <GlobalContext.Provider value={{ AppContext }}>
        <MemoryRouter initialEntries={['/watch/test']}>
          <Route exact path={'/watch/:videoId'}>
            <VideoReproducer />
          </Route>
        </MemoryRouter>
      </GlobalContext.Provider>
    );

    expect(AppContext).not.toHaveBeenCalled();
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getAllByRole('heading').length).not.toBe(0));
    await waitFor(() => expect(getAllByRole('heading').length).toBe(1));
    await waitFor(() =>
      expect(getByTitle('Youtube embed')).toBeInTheDocument()
    );
  });
});

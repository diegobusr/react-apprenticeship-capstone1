import React from 'react';
import PreviewVideoCard from './PreviewVideoCard.component';
import { render } from '@testing-library/react';
import mockData from '../../../../utils/youtube-videos-mock.json';

describe('PreviewVideoCard', () => {
  it('must render the card', () => {
    const { getByAltText, getByRole, getByText } = render(
      <PreviewVideoCard infoVideo={mockData.items[1]} />
    );

    expect(getByAltText('thumbnail')).toBeInTheDocument();
    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByText(/Follow Hector Padilla/i)).toBeInTheDocument();
  });
});

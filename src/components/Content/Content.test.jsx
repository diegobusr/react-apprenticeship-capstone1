import React from 'react';
import Content from './Content.component';
import { render } from '@testing-library/react';

describe('Content', () => {
  it('must render the content part', () => {
    const { getByText } = render(<Content>test</Content>);

    expect(getByText(/test/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import SharedUiTile from './shared-ui-tile';

describe(' SharedUiTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiTile />);
    expect(baseElement).toBeTruthy();
  });
});

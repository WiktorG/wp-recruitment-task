import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '~/helpers/testHelpers';

import Nav from './Nav';

test('component should render', async () => {
    renderWithProviders(<Nav />);
    const navNode = screen.getByTestId('Nav');
    expect(navNode).toBeInTheDocument();
});

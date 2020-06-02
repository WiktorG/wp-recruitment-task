import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithReduxProvider } from '~/helpers/testHelpers';

import Nav from './Nav';

test('component should render', async () => {
    renderWithReduxProvider(<Nav />);
    const navNode = screen.getByTestId('Nav');
    expect(navNode).toBeInTheDocument();
});

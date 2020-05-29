import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '~/helpers/testHelpers';

import ShipList from './ShipList';

test('component should render', async () => {
    renderWithProviders(
        <ShipList />,
    );
    const shipListNode = screen.getByTestId('ShipList');
    expect(shipListNode).toBeInTheDocument();
});

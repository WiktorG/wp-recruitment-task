import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithReduxProvider } from '~/helpers/testHelpers';

import ShipList from './ShipList';

test('component should render', async () => {
    renderWithReduxProvider(
        <ShipList />,
    );
    const shipListNode = screen.getByTestId('ShipList');
    expect(shipListNode).toBeInTheDocument();
});

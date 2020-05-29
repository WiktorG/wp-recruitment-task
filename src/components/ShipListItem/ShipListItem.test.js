import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '~/helpers/testHelpers';

import ShipListItem from './ShipListItem';

test('component should render', async () => {
    renderWithProviders(
        <ShipListItem
            name="SpaceShip"
            manufacturers={['Manufacturer1', 'Manufacturer1']}
            costInCredits={100}
        />,
    );
    const skeletonNode = screen.getByTestId('ListItem');
    expect(skeletonNode).toBeInTheDocument();
});

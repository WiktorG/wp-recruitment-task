import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithReduxProvider } from '~/helpers/testHelpers';

import ShipsListItem from './ShipsListItem';

test('component should render', async () => {
    renderWithReduxProvider(
        <ShipsListItem
            name="SpaceShip"
            manufacturers={['Manufacturer1', 'Manufacturer2']}
            costInCredits={100}
        />,
    );
    const skeletonNode = screen.getByTestId('ListItem');
    expect(skeletonNode).toMatchSnapshot();
});

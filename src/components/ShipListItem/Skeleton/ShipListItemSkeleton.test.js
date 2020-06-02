import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithReduxProvider } from '~/helpers/testHelpers';

import ShipListItemSkeleton from './ShipListItemSkeleton';

test('component should render', async () => {
    renderWithReduxProvider(<ShipListItemSkeleton />);
    const skeletonNode = screen.getByTestId('Skeleton');
    expect(skeletonNode).toBeInTheDocument();
});
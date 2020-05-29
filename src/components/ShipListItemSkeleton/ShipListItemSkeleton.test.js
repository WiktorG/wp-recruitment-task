import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '~/helpers/testHelpers';

import ShipListItemSkeleton from './ShipListItemSkeleton';

test('component should render', async () => {
    renderWithProviders(<ShipListItemSkeleton />);
    const skeletonNode = screen.getByTestId('Skeleton');
    expect(skeletonNode).toBeInTheDocument();
});

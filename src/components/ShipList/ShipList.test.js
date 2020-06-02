import React from 'react';
import { screen, wait, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { renderWithReduxProvider } from '~/helpers/testHelpers';

import ShipList, { SHIP_LIST } from './ShipList';

const successMocks = [{
    request: {
        query: SHIP_LIST,
    },
    result: {
        data: {
            allStarships: {
                edges: [{
                    node: {
                        name: 'Starship',
                        manufacturers: ['Manufacturer'],
                        costInCredits: 123,
                    },
                }],
            },
        },
    },
}];

const errorMocks = [{
    request: {
        query: SHIP_LIST,
    },
    error: new Error('Something went wrong'),
}];


test('component should render loader when data is loading', async () => {
    renderWithReduxProvider(
        <MockedProvider mocks={successMocks} addTypename={false}>
            <ShipList />
        </MockedProvider>,
    );

    const shipListNode = screen.getByTestId('List');
    const skeletonNodes = screen.getAllByTestId('Skeleton');

    expect(shipListNode).toBeInTheDocument();
    expect(screen.getByText('Starships are landing...')).toBeInTheDocument();
    skeletonNodes.forEach((node) => {
        expect(node).toBeInTheDocument();
    });
});

test('component should render list when data is provided', async () => {
    renderWithReduxProvider(
        <MockedProvider mocks={successMocks} addTypename={false}>
            <ShipList />
        </MockedProvider>,
    );

    const shipListNode = screen.getByTestId('List');

    // Wait for query to resolve
    await act(wait);

    const shipListItemNode = screen.getByTestId('ListItem');

    expect(shipListNode).toBeInTheDocument();
    expect(shipListItemNode).toBeInTheDocument();
});


test('component should render error when it is thrown from graphql', async () => {
    renderWithReduxProvider(
        <MockedProvider mocks={errorMocks} addTypename={false}>
            <ShipList />
        </MockedProvider>,
    );

    const shipListNode = screen.getByTestId('List');

    await act(wait);

    expect(shipListNode).toBeInTheDocument();
    expect(screen.getByText('Something went wrong - try again later :(')).toBeInTheDocument();
});

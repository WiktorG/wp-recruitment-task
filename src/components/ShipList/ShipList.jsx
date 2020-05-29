import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { v1 as uuid } from 'uuid';

import { SHIP_LIST } from '~/graphql/queries';

import ShipListItem from '~/components/ShipListItem';
import ShipListItemSkeleton from '~/components/ShipListItemSkeleton';

import {
    StyledContainer,
    StyledTitle,
    StyledShipList,
    StyledError,
} from './ShipList.styled';

const ShipList = () => {
    const { loading, error, data } = useQuery(SHIP_LIST);
    const listItems = !loading ? data.allStarships.edges
        .map(({ node }) => (
            <ShipListItem
                key={uuid()}
                name={node.name}
                manufacturers={node.manufacturers}
                costInCredits={node.costInCredits}
            />
        )) : Array.from(Array(9), () => <ShipListItemSkeleton key={uuid()} />);

    return (
        <StyledContainer
            data-testid="ShipList"
        >
            <StyledTitle>
                {!loading ? 'Pick your perfect starships' : 'Starships are landing...'}
            </StyledTitle>
            {!error ? (
                <StyledShipList>
                    {listItems}
                </StyledShipList>
            ) : (
                <StyledError>
                    Something went wrong - try again later :(
                </StyledError>
            )}
        </StyledContainer>
    );
};

export default ShipList;

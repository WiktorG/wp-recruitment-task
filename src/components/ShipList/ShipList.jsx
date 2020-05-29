import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { SHIP_LIST } from '~/graphql/queries';

import ShipListItem from '~/components/ShipListItem';
import ShipListSkeletonItem from '~/components/ShipListSkeletonItem';

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
                key={node.id}
                name={node.name}
                manufacturers={node.manufacturers}
                costInCredits={node.costInCredits}
            />
        )) : new Array(12).fill(<ShipListSkeletonItem />, 0, 9);

    return (
        <StyledContainer>
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

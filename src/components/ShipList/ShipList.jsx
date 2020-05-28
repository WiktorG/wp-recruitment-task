import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { SHIP_LIST } from '~/graphql/queries';

import ShipListItem from '~/components/ShipListItem';

import {
    StyledContainer,
    StyledTitle,
    StyledShipList,
} from './ShipList.styled';

const ShipList = () => {
    const { loading, data } = useQuery(SHIP_LIST);

    const listItems = !loading ? data.allStarships.edges
        .map(({ node }) => (
            <ShipListItem
                key={node.id}
                name={node.name}
                manufacturers={node.manufacturers}
                costInCredits={node.costInCredits}
            />
        )) : [];

    return (
        <StyledContainer>
            <StyledTitle>
                Pick your perfect starships
            </StyledTitle>
            <StyledShipList>
                {listItems}
            </StyledShipList>
        </StyledContainer>
    );
};

export default ShipList;

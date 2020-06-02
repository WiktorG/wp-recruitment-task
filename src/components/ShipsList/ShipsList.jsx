import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { v1 as uuid } from 'uuid';

import ShipsListItem from '~/components/ShipsListItem';
import ShipsListItemSkeleton from '~/components/ShipsListItem/Skeleton';

import {
    StyledContainer,
    StyledTitle,
    StyledShipsList,
    StyledError,
} from './ShipsList.styled';

export const SHIPS_LIST = gql`{
    allStarships {
      edges {
        node {
            name
            manufacturers
            costInCredits
        }
      }
    }
}`;

const ListItems = ({ items }) => items.map(({ node }) => (
    <ShipsListItem
        key={uuid()}
        name={node.name}
        manufacturers={node.manufacturers}
        costInCredits={node.costInCredits}
    />
));

const ListSkeletons = () => Array.from(Array(6), () => <ShipsListItemSkeleton key={uuid()} />);

const ShipList = () => {
    const { loading, error, data } = useQuery(SHIPS_LIST);

    return (
        <StyledContainer
            data-testid="List"
        >
            <StyledTitle>
                {!loading ? 'Pick your perfect starships' : 'Starships are landing...'}
            </StyledTitle>
            {!error ? (
                <StyledShipsList>
                    {!loading ? <ListItems items={data.allStarships.edges} /> : <ListSkeletons /> }
                </StyledShipsList>
            ) : (
                <StyledError>
                    Something went wrong - try again later :(
                </StyledError>
            )}
        </StyledContainer>
    );
};

export default ShipList;

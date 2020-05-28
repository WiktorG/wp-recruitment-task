import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { SHIP_LIST } from '~/graphql/queries';

import {
    StyledContainer,
    StyledTitle,
    StyledShipList,
} from './ShipList.styled';

const ShipList = () => {
    const { loading, error, data } = useQuery(SHIP_LIST);

    return (
        <StyledContainer>
            <StyledTitle>
                Select your perfect starships
            </StyledTitle>
            <StyledShipList>

            </StyledShipList>
        </StyledContainer>
    );
};

export default ShipList;

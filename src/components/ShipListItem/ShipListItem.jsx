import React from 'react';
import PropTypes from 'prop-types';
import { GiSpaceship } from 'react-icons/gi';

import {
    StyledShipListItem,
    StyledName,
} from './ShipListItem.styled';

const ShipListItem = ({
    name,
    manufacturers,
    costInCredits,
}) => {
    return (
        <StyledShipListItem>
            <StyledName>{name}</StyledName>
        </StyledShipListItem>
    );
};

ShipListItem.propTypes = {
    name: PropTypes.string.isRequired,
    manufacturers: PropTypes.arrayOf(PropTypes.string).isRequired,
    costInCredits: PropTypes.number,
};

ShipListItem.defaultProps = {
    costInCredits: null,
};

export default ShipListItem;

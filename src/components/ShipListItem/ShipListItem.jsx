import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledShipListItem
} from './ShipListItem.styled';

const ShipListItem = ({
    name,
    manufacturers,
    costInCredits,
}) => {
    return (
        <StyledShipListItem>
            ship
        </StyledShipListItem>
    );
};

ShipListItem.propTypes = {
    name: PropTypes.string.isRequired,
    manufacturers: PropTypes.arrayOf(PropTypes.string).isRequired,
    costInCredits: PropTypes.oneOfType([PropTypes.number, null]).isRequired,
};

export default ShipListItem;

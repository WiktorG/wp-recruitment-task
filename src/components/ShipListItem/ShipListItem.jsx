import React from 'react';
import PropTypes from 'prop-types';
import { GiSpaceship, GiSpaceSuit } from 'react-icons/gi';

import {
    StyledShipListItem,
    StyledProperty,
    StyledShipIcon
} from './ShipListItem.styled';

const ShipListItem = ({
    name,
    manufacturers,
    costInCredits,
}) => {
    return (
        <StyledShipListItem>
            <StyledProperty>
                <GiSpaceship />
                {name}
            </StyledProperty>
            <StyledProperty>
                <GiSpaceSuit />
                Manufacturers:
            </StyledProperty>
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

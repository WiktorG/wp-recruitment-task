import React from 'react';
import PropTypes from 'prop-types';

import AddToCartForm from '~/components/AddToCartForm';

import {
    StyledShipListItem,
    StyledName,
    StyledLabel,
    StyledManufacturers,
    StyledManufacturer,
    StyledPrice,
    StyledFooter,
} from './ShipListItem.styled';

const ShipListItem = ({
    name,
    manufacturers,
    costInCredits,
}) => {
    const avaliable = costInCredits !== null;

    const manufacturerItems = manufacturers.map((manufacturer, index) => (
        <>
            <StyledManufacturer>
                {manufacturer}
            </StyledManufacturer>
            {(index + 1 !== manufacturers.length) ? ' and ' : ''}
        </>
    ));

    return (
        <StyledShipListItem>
            <StyledName>
                {name}
            </StyledName>
            <StyledManufacturers>
                <StyledLabel>
                    by
                    {' '}
                </StyledLabel>
                {manufacturerItems}
            </StyledManufacturers>
            <StyledFooter>
                {avaliable ? (
                    <>
                        <StyledPrice>
                            <StyledLabel>
                                Price:
                            </StyledLabel>
                            {costInCredits}
                        </StyledPrice>
                        <AddToCartForm />
                    </>
                ) : (
                    <StyledPrice>
                        Currently unavaliable
                    </StyledPrice>
                )}
            </StyledFooter>
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

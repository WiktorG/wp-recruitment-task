import React from 'react';
import PropTypes from 'prop-types';
import { v1 as uuid } from 'uuid';

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

const Manufacturers = ({ items }) => items.map((item, index) => (
    <React.Fragment
        key={uuid()}
    >
        <StyledManufacturer>
            {item}
        </StyledManufacturer>
        {(index + 1 !== items.length) ? ' and ' : ''}
    </React.Fragment>
));

const ShipListItem = ({
    name,
    manufacturers,
    costInCredits,
}) => {
    const avaliable = costInCredits !== null;

    return (
        <StyledShipListItem
            data-testid="ListItem"
        >
            <StyledName>
                {name}
            </StyledName>
            <StyledManufacturers>
                <StyledLabel>
                    by
                    {' '}
                </StyledLabel>
                <Manufacturers items={manufacturers} />
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

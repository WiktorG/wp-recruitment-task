import React from 'react';
import PropTypes from 'prop-types';
import { v1 as uuid } from 'uuid';

import AddToCartForm from '~/components/AddToCartForm';

import {
    StyledShipsListItem,
    StyledName,
    StyledLabel,
    StyledManufacturers,
    StyledManufacturer,
    StyledPrice,
    StyledFooter,
} from './ShipsListItem.styled';

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

const ShipsListItem = ({
    name,
    manufacturers,
    costInCredits,
}) => {
    const avaliable = costInCredits !== null;

    return (
        <StyledShipsListItem
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
        </StyledShipsListItem>
    );
};

ShipsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    manufacturers: PropTypes.arrayOf(PropTypes.string).isRequired,
    costInCredits: PropTypes.number,
};

ShipsListItem.defaultProps = {
    costInCredits: null,
};

export default ShipsListItem;

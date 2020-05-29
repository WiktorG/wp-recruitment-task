import React from 'react';
import { useSelector } from 'react-redux';

import { cartItemCount as cartItemCountSelector } from '~/redux/selectors/cartSelectors';

import {
    StyledNav,
    StyledContainer,
    StyledLogo,
    StyledCaption,
    StyledCartIconContainer,
    StyledCartIcon,
} from './Nav.styled';

const Nav = () => {
    const cartItemCount = useSelector(cartItemCountSelector);

    return (
        <StyledNav>
            <StyledContainer>
                <StyledLogo href="/">
                    Star Wars
                    <StyledCaption>
                        ships retail centre
                    </StyledCaption>
                </StyledLogo>
                <StyledCartIconContainer>
                    {cartItemCount}
                    <StyledCartIcon />
                </StyledCartIconContainer>
            </StyledContainer>
        </StyledNav>
    );
};

export default Nav;

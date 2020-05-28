import React from 'react';

import {
    StyledNav,
    StyledContainer,
    StyledLogo,
    StyledCaption,
} from './Nav.styled';

const Nav = () => (
    <StyledNav>
        <StyledContainer>
            <StyledLogo href="/">
                Star Wars
                <StyledCaption>
                    ships retail centre
                </StyledCaption>
            </StyledLogo>
        </StyledContainer>
    </StyledNav>
);

export default Nav;

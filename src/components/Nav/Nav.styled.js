import styled from 'styled-components';
import colors from '~/utilities/colors';
import screens from '~/utilities/screens';

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: ${colors.navBackground};
    height: 50px;
    @media ${screens.mobileXL} {
        height: 66px;
    }
`;
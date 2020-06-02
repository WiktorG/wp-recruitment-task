import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import colors from '~/utilities/colors';
import screens from '~/utilities/screens';

export const StyledNav = styled.nav`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: ${colors.navBackground};
    @media ${screens.mobileXL} {
        height: 66px;
    };
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1080px;
    padding: 0 15px;
`;

export const StyledLogo = styled.a`
    display: flex;
    flex-direction: column;
    line-height: 0.8em;
    text-align: center;
    font-size: 1.3em;
    font-weight: 900;
    font-style: italic;
    @media ${screens.mobileXL} {
        font-size: 1.56em;
    }
`;

export const StyledCaption = styled.span`
    font-size: 0.64em;
    font-weight: normal;
`;

export const StyledCartIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyledCartIcon = styled(AiOutlineShoppingCart)`
    margin-left: 4px;
    font-size: 1.7em;
`;

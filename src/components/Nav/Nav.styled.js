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
    };
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    width: 100%;
    max-width: 1080px;
    padding: 0 10px;
`;

export const StyledLogo = styled.a`
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    line-height: 0.8em;
    text-align: center;
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

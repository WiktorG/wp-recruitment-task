import styled from 'styled-components';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    padding: 0 12px;
    @media ${screens.mobileS} {
        padding: 0 20px;
    }
`;

export const StyledTitle = styled.h1`
    width: 100%;
    text-align: left;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.3em;
    @media ${screens.mobileXL} {
        font-size: 1.5em;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export const StyledShipsList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    font-size: 1.25em;
    @media ${screens.mobileXL} {
        justify-content: space-between;
    }
`;

export const StyledError = styled.span`
    color: ${colors.red}
`;

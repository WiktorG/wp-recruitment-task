import styled from 'styled-components';

import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledShipsListItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${colors.shipBackground};
    min-height: 110px;
    padding: 10px 12px 55px;
    margin-bottom: 15px;
    font-size: 0.8em;
    @media ${screens.tablet} {
        width: calc(50% - 10px);
    }
`;

export const StyledName = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-weight: 600;
    font-style: italic;
    width: 100%;
    font-size: 1.1em;
    margin-bottom: 2px;
`;

export const StyledLabel = styled.span`
    font-weight: 400;
`;

export const StyledManufacturers = styled.div`
    font-size: 0.7em;
    display: inline-block;
    margin-bottom: 2px;
`;

export const StyledManufacturer = styled.span`
    display: inline;
    font-style: italic;
    font-weight: 600;
`;

export const StyledPrice = styled.span`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 0.8em;
    @media ${screens.mobileS} {
        font-size: 0.85em;
    }
    @media ${screens.mobileM} {
        font-size: 0.95em;
    }
`;

export const StyledFooter = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: calc(100% - 25px);
    height: 50px;
    bottom: 7px;
`;

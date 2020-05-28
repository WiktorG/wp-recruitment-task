import styled from 'styled-components';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledShipListItem = styled.li`
    display: flex;
    width: 100%;
    background-color: ${colors.shipBackground};
    padding: 10px 15px;
    margin-bottom: 15px;
    font-size: 0.9em;
    @media ${screens.mobileXL} {
        min-height: 150px;
        width: calc(50% - 10px);
    }
    @media ${screens.tablet} {
        width: calc(33.3% - 10px);
        &:nth-child(3n+2) {
            margin-left: 15px;
            margin-right: 15px;
        }
    }
`;

export const StyledName = styled.span`
    font-size: 1em;
`;

import styled, { keyframes } from 'styled-components';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

const shimmerAnim = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
`;

export const StyledShipListItemSkeleton = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${colors.shipBackground};
    min-height: 110px;
    margin-bottom: 15px;
    overflow-x: scroll;
    @media ${screens.tablet} {
        width: calc(50% - 10px);
    }

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(90deg, ${colors.shipBackground}, #1F1F1F, ${colors.shipBackground});
        animation: ${shimmerAnim} 2s infinite;
        content: '';
        display: block;
    }
`;

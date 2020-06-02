import styled from 'styled-components';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 50px;
    padding: 10px 20px;
    text-align: center;
    background-color: ${colors.footerBackground};
    font-weight: 600;
    font-style: italic;
    font-size: 0.85em;
    
    @media ${screens.mobileXL} {
        min-height: 70px;
        font-size: 1em;
    }
`;

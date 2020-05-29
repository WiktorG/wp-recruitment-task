import styled from 'styled-components';
import screens from '~/utilities/screens';
import fonts from '~/utilities/fonts';
import colors from '~/utilities/colors';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const StyledAmountInput = styled.input`
    width: 28px;
    height: 28px;
    background-color: rgba(0, 0, 0, 0);
    border: solid 2px ${colors.white};
    border-right: none;
    text-align: center;
    color: ${colors.white};
    font-family: ${fonts.default};
    transform: translateX(2px);
    @media ${screens.tablet} {
        width: 34px;
        height: 34px;
    }
`;

export const StyledButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: solid 2px ${colors.white};
    color: ${colors.white};
    font-family: ${fonts.default};
    cursor: pointer;
    height: 28px;
    font-size: 0.85em;
    font-weight: 600;
    min-width: 95px;
    transition: all 0.1s ease;
    white-space: nowrap
    &:active {
        background-color: ${colors.white};
        color: ${colors.black};
    }
    @media ${screens.mobileXL} {
        font-size: 0.8em;
        min-width: unset;
    }
    @media ${screens.tablet} {
        height: 34px;
        font-size: 0.85em;
        min-width: 95px;
    }
`;

import styled from 'styled-components';
import screens from '~/utilities/screens';
import fonts from '~/utilities/fonts';
import colors from '~/utilities/colors';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const StyledAmountContainer = styled.div`
    height: 31px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    border: solid 1px ${colors.white};
    margin-right: 1px;
    @media ${screens.mobileS} {
        margin-right: 3px;
    }
    @media ${screens.mobileXL} {
        height: 34px;
    }
`;

export const StyledAmountControl = styled.button`
    width: 20px;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    color: ${colors.white};
    font-size: 1em;
    text-align: center;
`;

export const StyledAmountInput = styled.input`
    width: 15px;
    height: 31px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    padding: 0;
    text-align: center;
    color: ${colors.white};
    font-family: ${fonts.default};
    @media ${screens.mobileM} {
        width: 24px;
    }
    @media ${screens.mobileXL} {
        width: 31px;
        height: 34px;
    }
`;

export const StyledButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: solid 1px ${colors.white};
    color: ${colors.white};
    font-family: ${fonts.default};
    cursor: pointer;
    height: 31px;
    font-size: 0.85em;
    font-weight: 500;
    min-width: 95px;
    transition: all 0.1s ease;
    white-space: nowrap;
    padding-right: 5px;
    padding-left: 5px;
    &:active {
        background-color: ${colors.white};
        color: ${colors.black};
    }
    @media ${screens.mobileS} {
        min-width: unset;
        padding-left: auto;
        padding-left: auto;
    }
    @media ${screens.mobileXL} {
        height: 34px;
        min-width: unset;
    }
    @media ${screens.tablet} {
        min-width: 95px;
    }
`;

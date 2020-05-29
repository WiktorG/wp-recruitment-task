import styled from 'styled-components';
import fonts from '~/utilities/fonts';
import colors from '~/utilities/colors';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const StyledAmountInput = styled.input`
    height: 34px;
    width: 34px;
    background-color: rgba(0, 0, 0, 0);
    border: solid 2px ${colors.white};
    border-right: none;
    text-align: center;
    color: ${colors.white};
    font-family: ${fonts.default};
`;

export const StyledButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: solid 2px ${colors.white};
    color: ${colors.white};
    font-family: ${fonts.default};
    font-weight: 700;
    cursor: pointer;
    height: 34px;
`;

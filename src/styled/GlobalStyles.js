import { createGlobalStyle } from 'styled-components';
import colors from '~/utilities/colors';
import fonts from '~/utilities/fonts';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${fonts.default};
        background-color: ${colors.appBackground};
        color: ${colors.white};
        font-size: 16px;
    }

    #root {
        min-width: 320px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input, button {
        border-radius: 0;
        -webkit-appearance: none;
        outline: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    .react-icons {
        vertical-align: middle;
    }
`;

export default GlobalStyle;

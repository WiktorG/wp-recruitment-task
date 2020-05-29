import { createGlobalStyle } from 'styled-components';
import screens from '~/utilities/screens';
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
        position: relative;
        padding-bottom: 90px;
        min-width: 320px;
        padding-top: 50px;
        padding-bottom: 70px;
        min-height: 100vh;
        @media ${screens.mobileXL} {
            padding-top: 66px;
            padding-bottom: 90px;
        };
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

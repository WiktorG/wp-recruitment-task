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

    a {
        color: inherit;
        text-decoration: none;
    }

    input, button {
        border-radius: none;
        -webkit-appearance: none;
        outline: none;
    }

    .react-icons {
        vertical-align: middle;
    }
`;

export default GlobalStyle;

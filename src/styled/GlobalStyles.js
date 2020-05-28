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
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;

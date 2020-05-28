import { createGlobalStyle } from 'styled-components';
import fonts from '~/utilities/fonts';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${fonts.default};
    }
`;

export default GlobalStyle;

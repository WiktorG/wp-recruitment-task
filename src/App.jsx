import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '~/styled/theme';
import GlobalStyles from '~/styled/GlobalStyles';

import store from '~/redux/store';

import Nav from '~/components/Nav';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Nav />
            <GlobalStyles />
        </ThemeProvider>
    </Provider>
);

export default App;

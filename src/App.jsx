import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '~/styled/theme';
import GlobalStyles from '~/styled/GlobalStyles';

import store from '~/redux/store';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <h1>Hello world</h1>
            <GlobalStyles />
        </ThemeProvider>
    </Provider>
);

export default App;

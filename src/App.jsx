import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import theme from '~/styled/theme';
import GlobalStyles from '~/styled/GlobalStyles';

import client from '~/graphql/client';
import store from '~/redux/store';

import Nav from '~/components/Nav';
import ShipList from '~/components/ShipList';

const App = () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <Nav />
                    <ShipList />
                    <GlobalStyles />
                </IconContext.Provider>
            </ThemeProvider>
        </Provider>
    </ApolloProvider>
);

export default App;

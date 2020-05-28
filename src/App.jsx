import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
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
                <Nav />
                <ShipList />
                <GlobalStyles />
            </ThemeProvider>
        </Provider>
    </ApolloProvider>
);

export default App;

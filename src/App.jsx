import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import { IconContext } from 'react-icons';
import GlobalStyles from '~/styled/GlobalStyles';

import client from '~/graphql/client';
import store from '~/redux/store';

import Nav from '~/components/Nav';
import ShipsList from '~/components/ShipsList';
import Footer from '~/components/Footer';

const App = () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <Nav />
                <ShipsList />
                <Footer />
                <GlobalStyles />
            </IconContext.Provider>
        </Provider>
    </ApolloProvider>
);

export default App;

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import client from '~/graphql/client';
import store from '~/redux/store';


export const renderWithProviders = (component) => render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            {component}
        </Provider>
    </ApolloProvider>,
);

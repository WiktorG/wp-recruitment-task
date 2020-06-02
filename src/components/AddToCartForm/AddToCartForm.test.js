import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithReduxProvider } from '~/helpers/testHelpers';

import AddToCartForm from './AddToCartForm';

test('component should render', async () => {
    renderWithReduxProvider(<AddToCartForm />);
    const formNode = screen.getByTestId('Form');
    expect(formNode).toBeInTheDocument();
});

import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '~/helpers/testHelpers';

import AddToCartForm from './AddToCartForm';

test('component should render', async () => {
    renderWithProviders(<AddToCartForm />);
    const formNode = screen.getByTestId('AddToCartForm');
    expect(formNode).toBeInTheDocument();
});

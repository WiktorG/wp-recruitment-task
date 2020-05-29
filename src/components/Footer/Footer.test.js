import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '~/helpers/testHelpers';

import Footer from './Footer';

test('component should render', async () => {
    renderWithProviders(<Footer />);
    const footerNode = screen.getByTestId('Footer');
    expect(footerNode).toBeInTheDocument();
});

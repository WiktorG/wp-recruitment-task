import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithReduxProvider } from '~/helpers/testHelpers';

import Footer from './Footer';

test('component should render', async () => {
    renderWithReduxProvider(<Footer />);
    const footerNode = screen.getByTestId('Footer');
    expect(footerNode).toBeInTheDocument();
});

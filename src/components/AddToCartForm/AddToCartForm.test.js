import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithReduxProvider } from '~/helpers/testHelpers';

import { increaseCartItemCount } from '~/redux/actions/cartActions';

import AddToCartForm from './AddToCartForm';

jest.mock('~/redux/actions/cartActions', () => ({
    increaseCartItemCount: jest.fn().mockReturnValue({ type: 'TEST' }),
}));

test('component should render', async () => {
    renderWithReduxProvider(<AddToCartForm />);
    const formNode = screen.getByTestId('Form');
    expect(formNode).toBeInTheDocument();
});

test('component should dispatch action on form submit', async () => {
    renderWithReduxProvider(<AddToCartForm />);
    const buttonNode = screen.getByTestId('Button');

    fireEvent.click(buttonNode);

    expect(increaseCartItemCount).toHaveBeenCalledWith(1);
});

test('component should dispatch action with specified input value and set it to "1"', async () => {
    renderWithReduxProvider(<AddToCartForm />);
    const buttonNode = screen.getByTestId('Button');
    const inputNode = screen.getByTestId('Input');
    const mockedInputValue = 5;
    fireEvent.change(inputNode, { target: { value: mockedInputValue } });
    fireEvent.click(buttonNode);

    expect(increaseCartItemCount).toHaveBeenCalledWith(mockedInputValue);
    expect(inputNode.value).toContain(1);
});

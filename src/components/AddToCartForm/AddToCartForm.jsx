import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { increaseCartItemCount } from '~/redux/actions/cartActions';

import {
    StyledForm,
    StyledAmountInput,
    StyledControlsWrapper,
    StyledControlButton,
    StyledButton,
} from './AddToCartForm.styled';

const AddToCartForm = () => {
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();
    const numRegex = /^[0-9]*$/;

    const handleBlur = () => {
        if (amount === '') {
            setAmount(1);
        }
    };

    const handleDecrease = (e) => {
        e.preventDefault();
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    const handleIncrease = (e) => {
        e.preventDefault();
        setAmount(amount + 1);
    };

    const handleAmountChange = (e) => {
        if (numRegex.test(e.target.value)) {
            setAmount(e.target.value, 10);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (numRegex.test(amount)) {
            dispatch(increaseCartItemCount(parseInt(amount, 10)));
            setAmount(1);
        }
    };

    return (
        <StyledForm
            data-testid="AddToCartForm"
        >
            <StyledControlButton
                onClick={handleDecrease}
            >
                -
            </StyledControlButton>
            <StyledAmountInput
                value={amount}
                onChange={handleAmountChange}
                onBlur={handleBlur}
                type="number"
            />
            <StyledControlButton
                onClick={handleIncrease}
            >
                +
            </StyledControlButton>
            <StyledButton
                type="submit"
                onClick={handleSubmit}
            >
                Add to cart
            </StyledButton>
        </StyledForm>
    );
};

export default AddToCartForm;

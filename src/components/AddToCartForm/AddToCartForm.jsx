import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { increaseCartItemCount } from '~/redux/actions/cartActions';

import {
    StyledForm,
    StyledAmountContainer,
    StyledAmountControl,
    StyledAmountInput,
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
            data-testid="Form"
        >
            <StyledAmountContainer>
                <StyledAmountControl
                    onClick={handleDecrease}
                >
                    -
                </StyledAmountControl>
                <StyledAmountInput
                    data-testid="Input"
                    value={amount}
                    onChange={handleAmountChange}
                    onBlur={handleBlur}
                    type="number"
                />
                <StyledAmountControl
                    onClick={handleIncrease}
                >
                    +
                </StyledAmountControl>
            </StyledAmountContainer>
            <StyledButton
                type="submit"
                data-testid="Button"
                onClick={handleSubmit}
            >
                Add to cart
            </StyledButton>
        </StyledForm>
    );
};

export default AddToCartForm;

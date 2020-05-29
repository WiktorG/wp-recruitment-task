import React, { useState } from 'react';

import {
    StyledForm,
    StyledAmountInput,
    StyledButton,
} from './AddToCartForm.styled';

const AddToCartForm = () => {
    const [amount, setAmount] = useState(1);
    const numRegex = /^[0-9]*$/;

    const handleBlur = () => {
        if (amount === '') {
            setAmount(1);
        }
    };

    const handleAmountChange = (e) => {
        if (numRegex.test(e.target.value)) {
            setAmount(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (numRegex.test(amount)) {
            console.log(amount);
        }
    };

    return (
        <StyledForm
            onSubmit={handleSubmit}
        >
            <StyledAmountInput
                value={amount}
                onChange={handleAmountChange}
                onBlur={handleBlur}
            />
            <StyledButton
                type="submit"
            >
                Add to cart
            </StyledButton>
        </StyledForm>
    );
};

export default AddToCartForm;

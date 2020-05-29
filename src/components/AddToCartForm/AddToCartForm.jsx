import React, { useState } from 'react';

import {
    StyledForm,
    StyledAmountInput,
    StyledButton,
} from './AddToCartForm.styled';

const AddToCartForm = () => {
    const [amount, setAmount] = useState(1);

    return (
        <StyledForm>
            <StyledAmountInput
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <StyledButton>
                Add to cart
            </StyledButton>
        </StyledForm>
    );
};

export default AddToCartForm;

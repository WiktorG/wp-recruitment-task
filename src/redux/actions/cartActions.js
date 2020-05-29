export const INCREASE_CART_ITEM_COUNT = 'INCREASE_CART_ITEM_COUNT';

export const increaseCartItemCount = (amountToIncrease) => ({
    type: INCREASE_CART_ITEM_COUNT,
    amountToIncrease,
});

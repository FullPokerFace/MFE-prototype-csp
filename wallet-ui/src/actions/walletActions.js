export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

export const multiplyByTenWallet = () => {
    return ({
        type: 'MULTIPLY_BY_TEN_WALLET'
    })
};

const walletActions = {
    increment,
    decrement,
    multiplyByTenWallet
}

export default walletActions;
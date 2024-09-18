export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

const walletActions = {
    increment,
    decrement
}

export default walletActions;
const initialState = {
    money: 0
};

const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                money: state.money + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                money: state.money - 1
            };
        case 'MULTIPLY_BY_TEN_WALLET':
            return {
                ...state,
                money: state.money * 10
            };
        default:
            return state;
    }
};

export default walletReducer;
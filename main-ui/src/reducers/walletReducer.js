const initialState = {
    money: 20
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
        default:
            return state;
    }
};

export default walletReducer;
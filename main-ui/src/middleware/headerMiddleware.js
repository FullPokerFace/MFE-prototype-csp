import walletActions from 'csp-wallet-ui/walletActions'
console.log(walletActions)

// headerMiddleware.js
const headerMiddleware = store => next => action => {


    if (action.type === 'MULTIPLY_BY_TEN') {
        // Do something when this action is dispatched
        console.log('MULTIPLY_BY_TEN action intercepted');
        store.dispatch(walletActions.multiplyByTenWallet())

        // You can dispatch additional actions, modify state, etc.
        // For example:
        // store.dispatch({ type: 'SOME_OTHER_ACTION' });
    }

    // Always call next(action) to pass the action along
    return next(action);
};

export default headerMiddleware;
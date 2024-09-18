import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './Wallet.module.scss';
import { decrement, increment } from '../actions/walletActions';

const ActionButton = ({ onClick, label }) => (
    <button className={styles.actionButton} onClick={onClick}>
        {label}
    </button>
);

export const Wallet = ({ money, incrementCount, decrementCount, company }) => {
    const [name, setName] = useState('Digital Wallet')

    return (
        <div className={styles.walletContainer}>
            <h1 className={styles.walletTitle}>{name} ({company})</h1>
            <div className={styles.balanceSection}>
                <h2 className={styles.balanceLabel}>Current Balance:</h2>
                <p className={styles.balanceAmount}>${money.toFixed(2)}</p>
            </div>
            <div className={styles.actionSection}>
                <ActionButton onClick={decrementCount} label="Subtract $1" />
                <ActionButton onClick={incrementCount} label="Add $1" />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    money: state.walletReducer.money
});

const mapDispatchToProps = {
    incrementCount: increment,
    decrementCount: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
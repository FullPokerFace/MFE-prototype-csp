// components/Error.js
import React from 'react';
import styles from './Error.module.scss';

const Error = ({ onRetry }) => (
    <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
            <h2 className={styles.errorTitle}>Failed to Load Resources</h2>
            <p className={styles.errorMessage}>
                We encountered an issue while loading essential components. This could be due to network connectivity problems or temporary service unavailability.
            </p>
            <p className={styles.errorInstruction}>
                Please ensure you have a stable internet connection and try again. If the problem persists, contact our support team.
            </p>
            <button className={styles.retryButton} onClick={onRetry}>
                Retry Loading
            </button>
        </div>
    </div>
);

export default Error;
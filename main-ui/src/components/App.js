import React from "react";
import { connect } from "react-redux";
import styles from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    if (!walletUI.Wallet) {
        return <div>Loading...</div>;
    }

    const { COMPANY, Wallet } = walletUI;
    const { Header, headerActions } = headerUI;

    return (
        <main className={styles.container}>
            <span className={styles.componentLabel}>Main module</span>
            <div className={styles.content}>
                <div className={styles.componentWrapper}>
                    <span className={styles.componentLabel}>Header module</span>
                    <Header />
                </div>
                {Wallet && (
                    <div className={styles.componentWrapper}>
                        <span className={styles.componentLabel}>Wallet module</span>
                        <Wallet company={COMPANY} />
                    </div>
                )}
            </div>
        </main>
    );
};

const mapStateToProps = (state) => ({
    walletUI: state.walletUI,
    headerUI: state.headerUI,
});

export default connect(mapStateToProps)(App);
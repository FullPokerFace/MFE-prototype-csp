import React from "react";
import { connect } from "react-redux";
import styles from './App.module.scss';
import Header from "csp-header-ui/Header";
import Wallet from "csp-wallet-ui/Wallet";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = (props) => {
    console.log(props)
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
                        <Wallet company={'CSP'} />
                    </div>
                )}
            </div>
        </main>
    );
};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Main);
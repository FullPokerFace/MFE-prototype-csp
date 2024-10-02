import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.scss';
import logo from './logo.png';
import headerActions from '../actions/headerActions';



export const Header = (props) => {
    const { multiplyByTen } = props || {};

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={`${styles.nav} py-3`}>
            <Container>
                <Navbar.Brand href="#home" className={styles.brand}>
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {['Search', 'Orders', 'Prescriptions', 'Account', 'Profile', 'Benefits', 'Services'].map((item) => (
                            <Nav.Link key={item} href={`#${item.toLowerCase()}`} className={styles.navLink}>
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <button className={`${styles.multiplyBtn} btn btn-outline-light`} onClick={multiplyByTen}>
                        Wallet X 10
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const mapStateToProps = (state) => {
    // const { money } = state.walletReducer;
    return {
        money: 0
    };
};

const mapDispatchToProps = {
    ...headerActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
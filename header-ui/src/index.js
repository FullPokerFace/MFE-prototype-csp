import Header from './components/Header';
import headerActions from './actions/headerActions'

// Expose the components for Module Federation
const HeaderComponent = {
    Header,
    headerActions
};

export { Header, headerActions };

// This is the entry point for Module Federation
export default HeaderComponent;

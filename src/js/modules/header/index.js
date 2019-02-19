import { connect } from 'react-redux';
import Component from './Header.jsx';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    logo: selectors.getLogo(state),
    status: selectors.getStatus(state),
    strings: selectors.getStrings(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

import { connect } from 'react-redux';
import Component from './Quotes.jsx';
import * as selectors from './selectors';
import * as actions from './actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    hideQuotesBlock: () => dispatch(actions.hideQuotesBlock()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

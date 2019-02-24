import { connect } from 'react-redux';
import Component from './MainComponent';
import * as selectors from './selectors';
import * as actions from './actions';

const mapStateToProps = state => ({
    modules: selectors.getModules(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

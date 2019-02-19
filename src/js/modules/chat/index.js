import { connect } from 'react-redux';
import Component from './Chat.jsx';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    users: selectors.getUsers(state),
    theme: selectors.getTheme(state),
    strings: selectors.getStrings(state),
    messages: selectors.getMessages(state),
});

const mapDispatchToProps = dispatch => ({
    addNewUser: () => dispatch(actions.addNewUser()),
    addNewMessage: payload => dispatch(actions.addNewMessage(payload)),
    toggleChatModule: payload => dispatch(actions.toggleChatModule(payload)),
    changeStateSelectedUser: payload => dispatch(actions.changeStateSelectedUser(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

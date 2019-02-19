import React from 'react';
import PropTypes from 'prop-types';

export default class Users extends React.Component {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.object).isRequired,
        strings: PropTypes.object.isRequired,
        addNewUser: PropTypes.func.isRequired,
        toggleChatModule: PropTypes.func.isRequired,
        changeStateSelectedUser: PropTypes.func.isRequired,
    };

    handleOnChange = event => {
        const { changeStateSelectedUser } = this.props;

        changeStateSelectedUser(event.currentTarget.accessKey);
    };

    render() {
        const {
            users,
            strings,
            addNewUser,
            toggleChatModule,
        } = this.props;

        return(
            <div className="main-wrapper__users users">
                <button onClick={toggleChatModule}>{strings.resources.close}</button>
                <h3 className="users__title">{`${strings.dialogResources.usersTitle}:`}</h3>
                <ul>
                    {users.map(user => {
                        return <li  key={user.name}
                                    style={{ fontWeight: user.isSelected ? 'bold' : 'normal', cursor: 'pointer' }}
                                    accessKey={user.name}
                                    onClick={this.handleOnChange}>{user.name}
                               </li>
                    })}
                </ul>
                <button onClick={addNewUser}>{strings.resources.add}</button>
            </div>
        )
    }
}
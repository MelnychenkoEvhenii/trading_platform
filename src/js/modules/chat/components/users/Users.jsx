import React from 'react'
import PropTypes from 'prop-types'

export default class Users extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    strings: PropTypes.shape().isRequired,
    addNewUser: PropTypes.func.isRequired,
    toggleChatModule: PropTypes.func.isRequired,
    changeStateSelectedUser: PropTypes.func.isRequired,
  }

  handleOnChange = e => {
    const { changeStateSelectedUser } = this.props
    changeStateSelectedUser(e.target.dataset.username)
  }

  render() {
    const { users, strings, addNewUser, toggleChatModule } = this.props

    return (
      <div className="main-wrapper__users users">
        <button type="button" onClick={toggleChatModule}>
          {strings.resources.close}
        </button>
        <h3 className="users__title">{`${
          strings.dialogResources.usersTitle
        }:`}</h3>
        <ul>
          {users.map(user => (
            /* eslint-disable-next-line */
            <li
              key={user.name}
              style={{
                fontWeight: user.isSelected ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
              data-username={user.name}
              onClick={this.handleOnChange}
            >
              {user.name}
            </li>
          ))}
        </ul>
        <button type="button" onClick={addNewUser}>
          {strings.resources.add}
        </button>
      </div>
    )
  }
}

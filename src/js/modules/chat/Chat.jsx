import React from 'react'
import PropTypes from 'prop-types'
import PureComponent from '../../base/pureComponent/PureComponent.jsx'
import Messages from './components/messages/Messages.jsx'
import Users from './components/users/Users.jsx'
import './chat.less'
import Wrapper from './styledComponents'
import { ThemeProvider } from 'styled-components'

export default class Chat extends PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    theme: PropTypes.object.isRequired,
    strings: PropTypes.object.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    addNewUser: PropTypes.func.isRequired,
    addNewMessage: PropTypes.func.isRequired,
    toggleChatModule: PropTypes.func.isRequired,
    changeStateSelectedUser: PropTypes.func.isRequired,
  }

  getFive = () => {
    const { theme } = this.props

    if (theme) {
      return 5
    }

    return 10
  }

  render() {
    const {
      users,
      theme,
      strings,
      messages,
      addNewUser,
      addNewMessage,
      toggleChatModule,
      changeStateSelectedUser,
    } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Messages
            users={users}
            messages={messages}
            addNewMessage={addNewMessage}
          />
          <Users
            users={users}
            strings={strings}
            addNewUser={addNewUser}
            toggleChatModule={toggleChatModule}
            changeStateSelectedUser={changeStateSelectedUser}
          />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

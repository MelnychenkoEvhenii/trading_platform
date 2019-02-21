import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

export default class Messages extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    addNewMessage: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }

  submitForm = event => {
    event.preventDefault()
    const { users, addNewMessage } = this.props

    let author = null
    /* eslint-disable-next-line no-restricted-syntax */
    for (const user of users) {
      if (user.isSelected) {
        author = user.name
        break
      }
    }

    addNewMessage({
      text: this.node.value,
      author,
      datetime: new Date().getTime(),
    })

    this.node.value = ''
  }

  render() {
    const { messages } = this.props

    return (
      <div className="main-wrapper__chat chat">
        <form onSubmit={this.submitForm} action="#">
          {messages.map(message => (
            <div key={message.datetime} className="chat__message message">
              <span className="message__date">
                {moment(message.datetime).format('DD:MM:YYYY hh:mm')}
              </span>
              <span className="message__author">{message.author}</span>
              <span>{message.text}</span>
            </div>
          ))}
          <input
            ref={node => {
              this.node = node
            }}
            type="text"
            className="chat__input"
          />
        </form>
      </div>
    )
  }
}

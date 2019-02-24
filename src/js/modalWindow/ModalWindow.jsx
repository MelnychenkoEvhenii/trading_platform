import React from 'react'
import PropTypes from 'prop-types'
import PureComponent from '../base/pureComponent/PureComponent'

export default class ModalWindow extends PureComponent {
  static propTypes = {
    strings: PropTypes.shape().isRequired,
    toggleChatModule: PropTypes.func.isRequired,
  }

  render() {
    const { strings, toggleChatModule } = this.props

    return (
      <div className="sidebar-wrapper">
        <button type="button" onClick={toggleChatModule}>
          {strings.resources.chat}
        </button>
      </div>
    )
  }
}

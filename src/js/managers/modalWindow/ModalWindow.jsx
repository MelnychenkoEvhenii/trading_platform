import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ModalWindow extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)
    this.portal = document.createElement('div')
    document.body.appendChild(this.portal)
  }

  componentWillUnmount() {
    document.body.removeChild(this.portal)
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal([children], this.portal)
  }
}

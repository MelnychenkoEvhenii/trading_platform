import React from 'react'
import PropTypes from 'prop-types'
import PureComponent from '../../base/pureComponent/PureComponent'
import './header.less'

export default class Header extends PureComponent {
  static propTypes = {
    logo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    strings: PropTypes.shape().isRequired,
  }

  render() {
    const { logo, status, strings } = this.props

    return (
      <div className="header-module">
        <div className="status-container header-module__status-container">
          <span className="status-container__status-text">{status}</span>
        </div>
        <div className="title-block header-module__title-block">
          <div className="logo-container title-block__logo-container">
            <img alt="example" className="logo-container__logo" src={logo} />
          </div>
          <div className="title-container title-block__title-container">
            <span className="title-container__text">
              {strings.resources.react}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

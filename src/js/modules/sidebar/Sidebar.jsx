import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PureComponent from '../../base/pureComponent/PureComponent'

const WrapperSidebar = styled.div`
  border: 1px double black;
  width: 70px;
  height: 100%;
`

export default class Sidebar extends PureComponent {
  static propTypes = {
    showRaceBlock: PropTypes.func.isRequired,
    showQuotesBlock: PropTypes.func.isRequired,
  }
  //   static defaultProps = {}

  render() {
    const { showRaceBlock, showQuotesBlock } = this.props

    return (
      <WrapperSidebar>
        SIDEBAR
        <button type="button" onClick={showRaceBlock}>
          Race
        </button>
        <button type="button" onClick={showQuotesBlock}>
          Quotes
        </button>
      </WrapperSidebar>
    )
  }
}

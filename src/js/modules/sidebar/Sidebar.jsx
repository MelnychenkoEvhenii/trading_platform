import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PureComponent from '../../base/pureComponent/PureComponent.jsx'

const WrapperSidebar = styled.div`
  background-color: ${props => props.theme.main};
  border: 1px double black;
  width: 70px;
  height: 100%;
`

export default class Sidebar extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const { showRaceBlock, showQuotesBlock, translations, theme } = this.props

    return (
      <WrapperSidebar theme={theme}>
        {translations.resources.sideBar}
        <button onClick={showRaceBlock}>{translations.resources.race}</button>
        <button onClick={showQuotesBlock}>
          {translations.resources.quotes}
        </button>
      </WrapperSidebar>
    )
  }
}

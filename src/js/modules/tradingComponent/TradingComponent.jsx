import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PureComponent from '../../base/pureComponent/PureComponent'
// import { GlobalStyleComponent } from 'styled-components';
// import News from './news'
import Quotes from './quotes/index'
import Race from './race/index'
import News from './news/index'

const WrapperTrading = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`

const RaceAndNews = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NewsContainer = styled.div`
  border: 1px double black;
  width: 100%;
  height: 100%;
`

export default class TradingComponent extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const {
      modules: { quotes, race },
    } = this.props

    return (
      <WrapperTrading>
        <RaceAndNews>
          <NewsContainer>
            <News />
          </NewsContainer>
          {race.isActive ? <Race /> : ''}
        </RaceAndNews>
        {quotes.isActive ? <Quotes /> : ''}
      </WrapperTrading>
    )
  }
}

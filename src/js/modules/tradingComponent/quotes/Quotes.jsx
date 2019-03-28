import React from 'react'
import styled from 'styled-components'
import ScrollBarCustom from 'react-scrollbars-custom'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown'
import PureComponent from '../../../base/pureComponent/PureComponent.jsx'
import ItemComponent from './Item.jsx'

const WrapperQuotes = styled.div`
  border: 1px double black;
  width: 100%;
`;

const WrapperSettings = styled.div`
  display: flex;
  justify-content: space-between;
`

const style = { width: '100%', height: '810px' }

export default class Quotes extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const {
      hideQuotesBlock,
      rates,
      filterInstrument,
      filter,
      filterMarketField,
      freezeInstruments,
    } = this.props

    const filterMarket = Object.keys(rates).reduce((acc, rate) => {
      if (filter.marketField === 'all') {
        return rates
      }
      if (rates[rate].market === filter.marketField) {
        return {
          ...acc,
          [rate]: rates[rate],
        }
      }
      return { ...acc }
    }, {})

    const filtered = Object.keys(filterMarket).reduce((acc, rate) => {
      if (
        rates[rate].name &&
        rates[rate].name.toLowerCase().indexOf(filter.instruments) + 1
      ) {
        return {
          ...acc,
          [rate]: rates[rate],
        }
      }
      return { ...acc }
    }, {})

    const showRates = Object.keys(filtered).map(key => {
      return (
        <ItemComponent
          key={key}
          rate={rates[key]}
          freezeInstruments={freezeInstruments}
        />
      )
    })

    const onChange = e => {
      filterInstrument(e.target.value)
    }

    const changeDropdown = e => {
      filterMarketField(e.value)
    }

    const options = ['all', 'Commodity', 'Crypto', 'Currency', 'Index', 'Stock']

    return (
      <WrapperQuotes>
        <WrapperSettings>
          <input
            onChange={onChange}
            type="text"
            placeholder="Название инструмента"
          />
          <Dropdown
            options={options}
            onChange={changeDropdown}
            value={filter.marketField}
          />
          <button onClick={hideQuotesBlock}>X</button>
        </WrapperSettings>
        <ScrollBarCustom style={style}>
          <div className="Wrapper-all-race">{showRates}</div>
        </ScrollBarCustom>
      </WrapperQuotes>
    )
  }
}

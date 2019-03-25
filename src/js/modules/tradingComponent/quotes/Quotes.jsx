import React from 'react'
import styled from 'styled-components'
import PureComponent from '../../../base/pureComponent/PureComponent.jsx'
import ItemComponent from './Item.jsx'
import ScrollBarCustom from 'react-scrollbars-custom';
import Dropdown from 'react-dropdown';

const WrapperQuotes = styled.div`
  border: 1px double black;
  width: 100%;
`;

const style = { width: '100%', height: '100%' };

export default class Quotes extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const { hideQuotesBlock, rates, filterInstrument, filter, filterMarketField } = this.props

    const filtered = Object.keys(rates).reduce((acc, rate) => {
      if(rates[rate].name && rates[rate].name.indexOf(filter.instruments) + 1 || rates[rate].market === filter.marketField) {
        return {
          ...acc,
          [rate]: rates[rate]
        };
      }
      else return { ...acc }
    }, {});

    const showRates = Object.keys(filtered).map(key => {
      return (
        <ItemComponent
          key={key}
          rate={rates[key]}
        />
      )
    })

    const onChange = (e) => {
      filterInstrument(e.target.value);
    };

    const changeDropdown = e => {
      filterMarketField(e.value);
    }

    const options = ['all', 'Commodity', 'Crypto', "Currency", "Index", "Stock"];

    return (
      <WrapperQuotes>
        <input onChange={onChange} type="text"/>
        <Dropdown options={options} onChange={changeDropdown} value={filter.marketField} />
        QUOTES
        <button onClick={hideQuotesBlock}>X</button>
        <ScrollBarCustom style={style} >
          <div className='Wrapper-all-race'>
            {showRates}
          </div>
        </ScrollBarCustom>
      </WrapperQuotes>
    )
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

export default class ItemComponent extends React.Component {
  static propTypes = {
    rate: PropTypes.object,
  }

  static defaultProps = {
    rate: {}
  }

  render() {
    const { rate, freezeInstruments } = this.props;

    return (
      <ItemWrapper onClick={() => freezeInstruments(rate.name)}>
        <Item>{rate.market}</Item>
        <Item>{rate.name}</Item>
        <Item>{rate.ask}</Item>
        <Item>{rate.bid}</Item>
      </ItemWrapper>
    );
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

export default class ItemComponent extends React.Component {
  static propTypes = {
    rate: PropTypes.object,
  }

  static defaultProps = {
    rate: {}
  }

  render() {
    const { rate } = this.props;

    return (
      <ItemWrapper>
        <div>{rate.market}</div>
        <div>{rate.name}</div>
        <div>{rate.ask}</div>
        <div>{rate.bid}</div>
      </ItemWrapper>
    );
  }
}
import React from 'react'
import styled, { keyframes } from 'styled-components'
import PureComponent from '../../base/pureComponent/PureComponent.jsx'


const rotate = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0)
    }
`;

const FooterWrapper = styled.div`
  border: 1px double black;
  height: 50px;
  display: flex;
`;

const Text = styled.span`
  display: inline-block;
  padding-left: 100%;
  -webkit-animation: scroll 15s infinite linear;
  -moz-animation: scroll 15s infinite linear;
  animation: ${rotate} 15s infinite linear;
`;

export default class Header extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {

    return (
      <FooterWrapper>
        <Text>FOOTER</Text>
      </FooterWrapper> )
  }
}
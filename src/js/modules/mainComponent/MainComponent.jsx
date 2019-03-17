import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PureComponent from '../../base/pureComponent/PureComponent'
import Header from '../header/index'
import Footer from '../footer/index'
import Sidebar from '../sidebar/index'
import TradindComponent from '../tradingComponent/index'

const WrapperMain = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const WrapperContent = styled.div`
  display: flex;
  flex: 1;
`

export default class MainComponent extends PureComponent {
  static propTypes = {
    modules: PropTypes.shape().isRequired,
  }
  //   static defaultProps = {}

  //   constructor(props) {
  //     super(props)
  //   }

  render() {
    const { modules } = this.props

    return (
      <WrapperMain>
        <Header />
        <WrapperContent>
          <Sidebar />
          <TradindComponent modules={modules} />
        </WrapperContent>
        <Footer />
      </WrapperMain>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PureComponent from '../../base/pureComponent/PureComponent.jsx'
import { BalanceModal } from './components/balanceModal/BalanceModal'
import { SettingsModal } from './components/settingsModal/SettingsModal'

const WrapperHeader = styled.div`
  border: 1px double black;
  display: flex;
  justify-content: space-between;
`

const BalanceButton = styled.button`
`
const SettingsButton = styled.button`
`

export default class Header extends PureComponent {
  static propTypes = {
    balance: PropTypes.number,
    modalWindowState: PropTypes.object,
    questions: PropTypes.object,
    toggleBalanceModal: PropTypes.func,
    toggleSettingsModal: PropTypes.func,
    checkAnswer: PropTypes.func,
  }

  static defaultProps = {}

  render() {
    const {
      balance,
      toggleBalanceModal,
      toggleSettingsModal,
      modalWindowState,
      questions,
      checkAnswer,
    } = this.props
    return (
      <WrapperHeader>
        <div className="name">ReactAppTeam</div>
        <div className="balance">{balance}$</div>
        <BalanceButton
          className="Balance"
          onClick={() => {
            toggleBalanceModal(!modalWindowState.balanceModalIsActive)
          }}
        >
          Пополнение баланса
        </BalanceButton>
        {modalWindowState.balanceModalIsActive && (
          <BalanceModal
            toggleBalanceModal={toggleBalanceModal}
            questions={questions}
            checkAnswer={checkAnswer}
          />
        )}
        <div className="logo">Logo</div>
        <div className="Notification">Notification</div>
        <div className="FullScreen">FullScreen</div>
        <SettingsButton
          className="Settings"
          onClick={() => {
            toggleSettingsModal(!modalWindowState.settingsModalIsActive)
          }}
        >
          Settings
        </SettingsButton>
        {modalWindowState.settingsModalIsActive && (
          <SettingsModal toggleSettingsModal={toggleSettingsModal} />
        )}

        <a href="https://deveducation.com/">Logout</a>
      </WrapperHeader>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PureComponent from '../../base/pureComponent/PureComponent.jsx'
import { BalanceModal } from './components/balanceModal/BalanceModal'
import { SettingsModal } from './components/settingsModal/SettingsModal'
import { fullScreenHandler } from './logic'

const WrapperHeader = styled.div`
  background-color: ${props => props.theme.main};
  border: 1px double black;
  display: flex;
  justify-content: space-between;
`

const BalanceButton = styled.button``
const SettingsButton = styled.button``

export default class Header extends PureComponent {
  static propTypes = {
    balance: PropTypes.number,
    modalWindowState: PropTypes.object,
    questions: PropTypes.object,
    translations: PropTypes.object,
    theme: PropTypes.object,
    toggleBalanceModal: PropTypes.func,
    toggleSettingsModal: PropTypes.func,
    changeLanguage: PropTypes.func,
    checkAnswer: PropTypes.func,
    changeTheme: PropTypes.func,
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
      translations,
      changeLanguage,
      changeTheme,
      theme,
    } = this.props
    return (
      <WrapperHeader theme={theme}>
        <div className="name">ReactAppTeam</div>
        <div className="balance">{balance}$</div>
        <BalanceButton
          className="Balance"
          onClick={() => {
            toggleBalanceModal(!modalWindowState.balanceModalIsActive)
          }}
        >
          {translations.resources.addBalance}
        </BalanceButton>
        {modalWindowState.balanceModalIsActive && (
          <BalanceModal
            toggleBalanceModal={toggleBalanceModal}
            questions={questions}
            checkAnswer={checkAnswer}
          />
        )}
        <div className="logo">Logo</div>
        <div className="Notification">
          {translations.resources.notification}
        </div>
        <button onClick={fullScreenHandler}>
          {translations.resources.fullScreen}
        </button>
        <SettingsButton
          className="Settings"
          onClick={() => {
            toggleSettingsModal(!modalWindowState.settingsModalIsActive)
          }}
        >
          {translations.resources.settings}
        </SettingsButton>
        {modalWindowState.settingsModalIsActive && (
          <SettingsModal
            changeLanguage={changeLanguage}
            changeTheme={changeTheme}
            translations={translations}
            toggleSettingsModal={toggleSettingsModal}
          />
        )}

        <a href="https://deveducation.com/">{translations.resources.logOut}</a>
      </WrapperHeader>
    )
  }
}

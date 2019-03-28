import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import ModalWindow from '../../../../managers/modalWindow'
import { OutSideClickHandler } from '../../../../managers/OutSideClickHandler'

const CloseModalButton = styled.button`
  margin-left: auto;
  height: fit-content;
`

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(239, 239, 239, 0.5);
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const HeaderModal = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: green;
`

const BodyModal = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background-color: yellow;
`
const ConntentWrapper = styled.div`
  width: 600px;
  height: 500px;
`
const SelectLanguageWrapper = styled.div`
  height: 40px;
  width: 300px;
`
const SelectThemeWrapper = styled.div`
  height: 40px;
  width: 300px;
`

const propTypes = {
  toggleSettingsModal: PropTypes.func,
  changeLanguage: PropTypes.func,
  changeTheme: PropTypes.func,
  translations: PropTypes.object,
}

export const SettingsModal = props => {
  const {
    toggleSettingsModal,
    changeLanguage,
    changeTheme,
    translations,
  } = props

  const handleChangeLang = event => {
    changeLanguage(event.target.value)
  }
  const handleChangeTheme = event => {
    changeTheme(event.target.value)
  }
  return (
    <ModalWindow>
      <ModalWrapper>
        <OutSideClickHandler
          handler={() => {
            toggleSettingsModal(false)
          }}
        >
          <ConntentWrapper className="ContentWrapper">
            <HeaderModal>
              <CloseModalButton
                onClick={() => {
                  toggleSettingsModal(false)
                }}
              >
                X
              </CloseModalButton>
            </HeaderModal>
            <BodyModal>
              <SelectLanguageWrapper>
                {translations.resources.chooseLang}
                <select onChange={handleChangeLang}>
                  <option value="ru">ru</option>
                  <option value="en">en</option>
                </select>
              </SelectLanguageWrapper>
              <SelectThemeWrapper>
                {translations.resources.chooseTheme}
                <select onChange={handleChangeTheme}>
                  <option value="light">light</option>
                  <option value="dark">dark</option>
                </select>
              </SelectThemeWrapper>
            </BodyModal>
          </ConntentWrapper>
        </OutSideClickHandler>
      </ModalWrapper>
    </ModalWindow>
  )
}

SettingsModal.propTypes = propTypes

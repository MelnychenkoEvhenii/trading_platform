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

const ConntentWrapper = styled.div`
  width: 600px;
  height: 500px;
`

const propTypes = {
  toggleSettingsModal: PropTypes.func,
}

export const SettingsModal = props => {
  const { toggleSettingsModal } = props

  return (
    <ModalWindow>
      <ModalWrapper>
        <OutSideClickHandler
          handler={() => {
            toggleSettingsModal(false)
          }}
        >
          <ConntentWrapper>
            <HeaderModal>
              <CloseModalButton
                onClick={() => {
                  toggleSettingsModal(false)
                }}
              >
                X
              </CloseModalButton>
            </HeaderModal>
          </ConntentWrapper>
        </OutSideClickHandler>
      </ModalWrapper>
    </ModalWindow>
  )
}

SettingsModal.propTypes = propTypes

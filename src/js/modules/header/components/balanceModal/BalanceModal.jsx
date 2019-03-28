import styled from 'styled-components'
import PropTypes from 'prop-types';
import React, { useState } from 'react'
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

const ContentWrapper = styled.div`
  width: 600px;
  height: 500px;
`

const HeaderModal = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: green;
`

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  background-color: yellow;
`

const AnswersWrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: blue;
`
const Answer = styled.button`
  border: 1px solid black;
  width: 100%;
  height: 30px;
  color: black;
  background-color: ${props =>
    props.answered ? (props.correctAnswer ? 'green' : 'red') : 'white'};
`
const propTypes = {
  toggleBalanceModal: PropTypes.func,
  checkAnswer: PropTypes.func,
  questions: PropTypes.object,
}

export const BalanceModal = React.memo(function BalanceModal(props) {
  const { toggleBalanceModal, questions, checkAnswer } = props;
  const [anwered, setAnswered] = useState([false])

  const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand)
    return rand
  }
  const question = randomInteger(1, 3)

  return (
    <ModalWindow>
      <ModalWrapper>
        <OutSideClickHandler
          handler={() => {
            toggleBalanceModal(false)
          }}
        >
          <ContentWrapper>
            <HeaderModal>
              <CloseModalButton
                onClick={() => {
                  toggleBalanceModal(false)
                }}
              >
                X
              </CloseModalButton>
            </HeaderModal>
            <QuestionWrapper>
              <span>
                {anwered[0]
                  ? questions[anwered[1]].text
                  : questions[question].text}
              </span>
            </QuestionWrapper>
            <AnswersWrapper>
              {anwered[0]
                ? questions[anwered[1]].answers.map((answer, key) => {
                    return (
                      <Answer
                        key={key}
                        disabled={anwered[0]}
                        answered={anwered[0]}
                        correctAnswer={anwered[2] === key}
                      >
                        {answer}
                      </Answer>
                    )
                  })
                : questions[question].answers.map((answer, key) => {
                    return (
                      <Answer
                        onClick={() => {
                          checkAnswer([question, key])
                          setAnswered([
                            true,
                            question,
                            questions[question].correctAnswer,
                          ])
                        }}
                        key={key}
                        disabled={anwered[0]}
                      >
                        {answer}
                      </Answer>
                    )
                  })}
            </AnswersWrapper>
          </ContentWrapper>
        </OutSideClickHandler>
      </ModalWrapper>
    </ModalWindow>
  )
})

BalanceModal.propTypes = propTypes;

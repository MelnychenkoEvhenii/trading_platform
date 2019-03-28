import { connect } from 'react-redux'
import Component from './Header.jsx'
import * as selectors from './selectors'
import * as actions from './actions'

const mapStateToProps = state => ({
  balance: selectors.getBalance(state),
  modalWindowState: selectors.getModalWindowState(state),
  questions: selectors.getQuestions(state),
  translations: selectors.getTranslations(state),
  theme: selectors.getTheme(state),
})

const mapDispatchToProps = dispatch => ({
  toggleBalanceModal: payload => dispatch(actions.toggleBalanaceModal(payload)),
  toggleSettingsModal: payload =>
    dispatch(actions.toggleSettingsModal(payload)),
  checkAnswer: payload => dispatch(actions.checkAnswer(payload)),
  changeLanguage: payload => dispatch(actions.changeLanguage(payload)),
  changeTheme: payload => dispatch(actions.changeTheme(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

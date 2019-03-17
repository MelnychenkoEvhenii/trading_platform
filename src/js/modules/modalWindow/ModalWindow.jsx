import React from 'react'
import PropTypes from 'prop-types'
import './styles.less'

const ModalWindow = ({ toggleModal, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={toggleModal}>
          Close
        </button>
      </section>
    </div>
  )
}

ModalWindow.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default ModalWindow

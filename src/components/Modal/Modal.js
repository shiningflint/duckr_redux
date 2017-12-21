import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactModal } from 'react-modal'
import './Modal.css'
import 'sharedStyles/styles.css'

const modalStyles = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 220,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0,
  },
}

const Modal = (props) => {
  return (
    <button className="dark-btn" onClick={props.openModal}>
      {'Duck'}
      <ReactModal style={modalStyles} isOpen={props.isOpen}>

      </ReactModal>
    </button>
  )
}

// Modal.propTypes = {
//   duckText: PropTypes.string.isRequired,
//   isSubmitDisabled: PropTypes.bool.isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   user: PropTypes.object.isRequired,
//   openModal: PropTypes.func.isRequired,
//   closeModal: PropTypes.func.isRequired,
//   updateDuckText: PropTypes.func.isRequired,
// }

export default Modal

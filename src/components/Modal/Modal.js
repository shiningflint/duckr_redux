import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactModal } from 'react-modal'
import './Modal.css'
import 'sharedStyles/styles.css'

const modalStyles = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 230,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0,
  },
}

const Modal = (props) => {
  function submitDuck() {
    console.log('Duck', props.duckText)
    console.log('user', props.user)
  }

  return (
    <div>
      <button className="dark-btn" onClick={props.openModal}>
        {'Duck'}</button>
      <ReactModal
        style={modalStyles}
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        ariaHideApp={false}>
        <div className='new-duck-top'>
          <span>{'Compose new Duck'}</span>
          <span onClick={props.closeModal} className='pointer'>{'X'}</span>
        </div>
        <div className='base-text-area-container'>
          <textarea
            onChange={(e) => props.updateDuckText(e.target.value)}
            value={props.duckText}
            maxLength={140}
            type='text'
            className='base-text-area base-text-area--no-border'
            placeholder="What's on your mind?"/>
        </div>
        <button
          disabled={props.isSubmitDisabled}
          className="dark-btn dark-btn--submit-duck"
          onClick={submitDuck}>
          {'Duck'}
        </button>
      </ReactModal>
    </div>
  )
}

Modal.propTypes = {
  duckText: PropTypes.string.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  updateDuckText: PropTypes.func.isRequired,
}

export default Modal

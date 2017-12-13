import React from 'react'
import PropTypes from 'prop-types'
import './FacebookAuthButton.css'

const FacebookAuthButton = ({ onAuth, isFetching }) => {
  return (
    <button
      onClick={onAuth}
      className='facebook-authbtn'>
      { isFetching
          ? 'Loading'
          : 'Login with facebook'
      }
    </button>
  )
}

FacebookAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default FacebookAuthButton

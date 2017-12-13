import React from 'react'
import PropTypes from 'prop-types'
import 'sharedStyles/styles.css'
import { FacebookAuthButton } from 'components'

const Authenticate = ({error, isFetching, onAuth }) => {
  return (
    <div className='centered-container'>
      <h1 className='large-header'>{'Authenticate'}</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p className='error-message'>{error}</p> : null}
    </div>
  )
}

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default Authenticate

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { connect } from 'react-redux'

class AuthenticateContainer extends Component {
  handleAuth() {
    auth().then((user) => {
      console.log('Authed User', user);
    })
  }
  render () {
    return (
      <Authenticate
        isFetching={false}
        error={''}
        onAuth={this.handleAuth} />
    )
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

const mapStateToProps = ({ isFetching, error }) => {
  return { isFetching, error }
}

export default connect(mapStateToProps)(AuthenticateContainer)

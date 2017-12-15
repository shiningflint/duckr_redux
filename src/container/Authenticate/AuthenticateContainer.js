import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Authenticate } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends Component {
  constructor(props) {
    super(props)
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth() {
    this.props.fetchAndHandleAuthedUser()
  }

  render () {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  console.log(state)
  return { isFetching: state.isFetching, error: state.error }
}

//mapStateToProps
//mapDispatchToProps
export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer)

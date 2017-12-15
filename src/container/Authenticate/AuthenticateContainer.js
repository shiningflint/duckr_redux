import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends Component {
  constructor(props) {
    super(props)
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth() {
    this.props.fetchingUser()
    auth().then((user) => {
      this.props.fetchingUserSuccess(user.uid, user, Date.now())
      this.props.authUser(user.uid)
    })
    .catch((error) => (this.props.fetchingUserFailure(error)))
  }
  render () {
    console.log(this.props);
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
  fetchingUser: PropTypes.func.isRequired,
  fetchingUserFailure: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
}

//mapStateToProps
//mapDispatchToProps
export default connect(
  (state) => ({ isFetching: state.isFetching, error: state.error }),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer)

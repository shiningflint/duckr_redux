import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Authenticate } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends Component {
  constructor(props) {
    super(props)
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth(e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => (this.props.history.push('/feed')))
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

const mapStateToProps = ({users}) => {
  return { isFetching: users.isFetching, error: users.error }
}

//mapStateToProps
//mapDispatchToProps
export default withRouter(connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer))

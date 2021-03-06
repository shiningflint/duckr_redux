import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MainContainer.css'
import { Navigation } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as userActionCreators from 'redux/modules/users'
import * as usersLikesActionCreators from 'redux/modules/usersLikes'
import { firebaseAuth } from 'helpers/constants'
import { formatUserInfo } from 'helpers/utilities'

class MainContainer extends Component {
  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        this.props.setUsersLikes()
      } else {
        this.props.removeFetchingUser()
      }
    })
  }

  render () {
    return (this.props.isFetching === true
      ? null
      : <div className="main-container__container">
        <Navigation isAuthed={this.props.isAuthed} />
        <div className="main-container__inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  authUser: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
  removeFetchingUser: PropTypes.func.isRequired,
  setUsersLikes: PropTypes.func.isRequired
}

const mapStateToProps = ({users}) => {
  return ({ isAuthed: users.isAuthed, isFetching: users.isFetching })
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...userActionCreators,
    ...usersLikesActionCreators
  }, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer))

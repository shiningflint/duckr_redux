import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { User } from 'components'
import { staleDucks, staleUser } from 'helpers/utilities'
import * as usersActionCreators from 'redux/modules/users'
import * as usersDucksActionCreators from 'redux/modules/usersDucks'

class UserContainer extends Component {
  componentDidMount() {
    const uid = this.props.match.params.uid
    if(this.props.noUser === true || staleUser(this.props.lastUpdated)) {
      this.props.fetchAndHandleUser(uid)
    }
    if (this.props.noUser === true || staleDucks(this.props.lastUpdated)) {
      this.props.fetchAndHandleUsersDucks(uid)
    }
  }

  render () {
    return (
      <User
        noUser={this.props.noUser}
        name={this.props.name}
        isFetching={this.props.isFetching}
        error={this.props.error}
        duckIds={this.props.duckIds} />
    )
  }
}

UserContainer.propTypes = {
  name: PropTypes.string.isRequired,
  noUser: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  lastUpdated: PropTypes.number.isRequired,
  duckIds: PropTypes.array.isRequired,
  routeParams: PropTypes.shape({uid: PropTypes.string.isRequired}),
  fetchAndHandleUsersDucks: PropTypes.func.isRequired,
  fetchAndHandleUser: PropTypes.func.isRequired,
}

const mapStateToProps = ({ users, usersDucks }, props) => {
  const specificUsersDucks = usersDucks[props.match.params.uid]
  const user = users[props.match.params.uid]
  const noUser = typeof user === 'undefined'
  const name = noUser ? '' : user.info.name
  return {
    noUser,
    name,
    isFetching: users.isFetching || usersDucks.isFetching,
    error: users.error || usersDucks.error,
    lastUpdated: specificUsersDucks ? specificUsersDucks.lastUpdated : 0,
    duckIds: specificUsersDucks ? specificUsersDucks.duckIds : [],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...usersActionCreators,
    ...usersDucksActionCreators
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

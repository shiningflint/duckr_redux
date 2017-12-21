import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ isFetching, isAuthed, component: Component, ...rest }) => {
  if (isFetching === true) { return (<div>{'spinner'}</div>) }
  return (
    <Route {...rest} render={(props) => (
      isAuthed === true
        ? <Component {...props} />
        : <Redirect to='/auth' />
    )} />
  )
}

PrivateRoute.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return ({ isAuthed: state.isAuthed, isFetching: state.isFetching })
}

export default connect(mapStateToProps)(PrivateRoute)

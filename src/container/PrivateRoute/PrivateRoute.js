import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ isAuthed, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      isAuthed === true
        ? <Component {...props} />
        : <Redirect to='/auth' />
    )} />
  )
}

PrivateRoute.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return ({ isAuthed: state.isAuthed })
}

export default connect(mapStateToProps)(PrivateRoute)

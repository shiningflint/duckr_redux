import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const RedirectRoute = ({ isAuthed, redirectTo, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      isAuthed !== true
        ? <Component {...props} />
        : <Redirect to = {redirectTo} />
    )} />
  )
}

RedirectRoute.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return ({ isAuthed: state.isAuthed })
}

export default connect(mapStateToProps)(RedirectRoute)

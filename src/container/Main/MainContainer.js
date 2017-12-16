import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MainContainer.css'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class MainContainer extends Component {
  render () {
    return (
      <div className="main-container__container">
        <Navigation isAuthed={this.props.isAuthed} />
        <div className="main-container__inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

export default withRouter(connect(
  (state) => ({ isAuthed: state.isAuthed })
)(MainContainer))

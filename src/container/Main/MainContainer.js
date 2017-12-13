import React, { Component } from 'react'
import './MainContainer.css'
import { Navigation } from 'components'

class MainContainer extends Component {
  render () {
    return (
      <div className="main-container__container">
        <Navigation isAuthed={false} />
        <div className="main-container__inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainContainer

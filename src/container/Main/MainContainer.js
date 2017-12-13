import React, { Component } from 'react'
import './MainContainer.css'

class MainContainer extends Component {
  render () {
    return (
      <div className="main-container__container">
        <div className="main-container__inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainContainer

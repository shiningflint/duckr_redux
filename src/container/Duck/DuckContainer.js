import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Duck } from 'components'

class DuckContainer extends Component {
  constructor(props) {
    super(props)
    this.goToProfile = this.goToProfile.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  goToProfile(e) {
    e.stopPropagation()
    this.props.history.push('/' + this.props.duck.uid)
  }

  handleClick(e) {
    e.stopPropagation()
    this.props.history.push('/duckDetail/' + this.props.duck.duckId)
  }

  render() {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  }
}

const mapStateToProps = ({ducks, usersLikes, likeCount}, props) => {
  return {
    duck: ducks[props.duckId],
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

DuckContainer.defaultProps = {
  hideReplyBtn: false,
  hideLikeCount: true,
}

DuckContainer.propTypes = {
  duck: PropTypes.object.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  hideReplyBtn: PropTypes.bool.isRequired,
  isLiked: PropTypes.bool.isRequired,
  // numberOfLikes: PropTypes.number.isRequired,
  // addAndHandleLike: PropTypes.func.isRequired,
  // handleDeleteLike: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(withRouter(DuckContainer))

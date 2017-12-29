import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DuckDetails } from 'components'
import * as duckActionCreators from 'redux/modules/ducks'
import * as likeCountActionCreators from 'redux/modules/likeCount'
import * as repliesActionCreators from 'redux/modules/replies'

class DuckDetailsContainer extends Component {
  componentDidMount() {
    this.props.initLikeFetch(this.props.duckId)
    if (this.props.duckAlreadyFetched === false) {
      this.props.fetchAndHandleDuck(this.props.duckId)
    } else {
      this.props.removeFetching()
    }
  }

  render () {
    console.log(this.props)
    return (
      <DuckDetails
        isFetching={this.props.isFetching}
        duckId={this.props.duckId}
        authedUser={this.props.authedUser}
        error={this.props.error}
        addAndHandleReply={this.props.addAndHandleReply} />
    )
  }
}

DuckDetailsContainer.propTypes = {
  authedUser: PropTypes.object.isRequired,
  duckId: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  removeFetching: PropTypes.func.isRequired,
  fetchAndHandleDuck: PropTypes.func.isRequired,
  duckAlreadyFetched: PropTypes.bool.isRequired,
  initLikeFetch: PropTypes.func.isRequired,
  addAndHandleReply: PropTypes.func.isRequired,
}

const mapStateToProps = ({ likeCount, ducks, users }, props) => {
  return {
    isFetching: ducks.isFetching || likeCount.isFetching,
    authedUser: users[users.authedId].info,
    error: ducks.error,
    duckId: props.match.params.duckId,
    duckAlreadyFetched: !!ducks[props.match.params.duckId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...duckActionCreators,
    ...likeCountActionCreators,
    ...repliesActionCreators
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckDetailsContainer)

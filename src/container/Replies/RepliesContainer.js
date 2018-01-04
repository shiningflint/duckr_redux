import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Replies } from 'components'
import { staleReplies } from 'helpers/utilities'
import * as repliesActionCreator from 'redux/modules/replies'

class RepliesContainer extends Component {
  componentDidMount () {
    if (staleReplies(this.props.lastUpdated)) {
      this.props.fetchAndHandleReplies(this.props.duckId)
    }
  }

  render () {
    return <Replies
      error={this.props.error}
      isFetching={this.props.isFetching}
      replies={this.props.replies} />
  }
}

RepliesContainer.defaultProps = {
  lastUpdated: 0,
  replies: {}
}

RepliesContainer.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  replies: PropTypes.object,
  duckId: PropTypes.string.isRequired,
}

const mapStateToProps = (state, props) => {
  const duckRepliesInfo = state.replies[props.duckId] || {}
  const { lastUpdated, replies } = duckRepliesInfo

  return {
    error: state.replies.error,
    isFetching: state.replies.isFetching,
    replies,
    lastUpdated
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(repliesActionCreator, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepliesContainer)

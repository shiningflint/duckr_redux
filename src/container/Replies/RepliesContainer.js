import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Replies } from 'components'
import * as repliesActionCreator from 'redux/modules/replies'

class RepliesContainer extends Component {
  componentDidMount () {
    this.props.fetchAndHandleReplies(this.props.duckId)
  }

  render () {
    return <Replies
      error={this.props.error}
      isFetching={this.props.isFetching}
      replies={this.props.replies} />
  }
}

RepliesContainer.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  replies: PropTypes.object,
  duckId: PropTypes.string.isRequired,
}

const mapStateToProps = ({ replies }, props) => {
  const duckRepliesInfo = replies[props.duckId] || {}
  const theReplies = duckRepliesInfo.replies || {}
  return {
    error: replies.error,
    isFetching: replies.isFetching,
    replies: theReplies,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(repliesActionCreator, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepliesContainer)

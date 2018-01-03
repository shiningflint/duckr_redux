import React from 'react'
import PropTypes from 'prop-types'
import { formatTimestamp } from 'helpers/utilities'
import './Replies.css'
import 'sharedStyles/styles.css'

const Reply = ({ comment }) => {
  return (
    <div className='reply-container'>
      <img src={comment.avatar} alt={comment.name} className='avatar' />
      <div>
        <div className='replies-author'>{comment.name}</div>
        <div className='cushion'>{ formatTimestamp(comment.timestamp) }</div>
        <div className='cushion'>{comment.reply}</div>
      </div>
    </div>
  )
}

const Replies = ({ replies, error, isFetching }) => {
  const replyIds = Object.keys(replies)
  return (
    <div>
      {error ? <h3 className='error-message'>{error}</h3> : null}
      {isFetching === true
        ? <p>{'Fetching Replies'}</p>
        : <div>
            <h1 className='replies-header'>{'Replies'}</h1>
            {replyIds.map((replyId) => (
              <Reply key={replyId} comment={replies[replyId]} />
            ))}
          </div>}
      {replyIds.length === 0 ? <h3 className='center'>{'Be the first to comment. 😎'}</h3> : null}
    </div>
  )
}

Replies.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  replies: PropTypes.object
}

export default Replies

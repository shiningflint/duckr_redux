import React from 'react'
import PropTypes from 'prop-types'
import { DuckContainer, RepliesContainer } from 'container'
import { formatReply } from 'helpers/utilities'
import './DuckDetails.css'
import 'sharedStyles/styles.css'

const DuckDetails = (props) => {
  function Reply({submit}) {
    const handleSubmit = (e) => {
      if (Reply.ref.value.length === 0) return
      submit(Reply.ref.value, e)
      Reply.ref.value = ''
    }

    return (
      <div className="reply-text-area-container">
        <textarea
          className="reply-text-area"
          ref={(ref) => (Reply.ref = ref)}
          maxLength={140}
          type='text'
          placeholder='Your reponse'/>
        <button
          onClick={handleSubmit}
          className='dark-btn'>
            {'Submit'}
        </button>
      </div>
    )
  }

  return (
    <div className='main-container'>
      {props.isFetching === true
        ? <p className='sub-header'>{'Fetching'}</p>
        : <div className="container">
            <div className="content">
              <DuckContainer duckId={props.duckId} hideLikeCount={false} hideReplyBtn={true} />
              <Reply submit={(replyText) => { props.addAndHandleReply(props.duckId, formatReply(replyText, props.authedUser)) }} />
            </div>
            <div className="replies-container">
              <RepliesContainer duckId={props.duckId} />
            </div>
          </div>
      }
      {props.error ? <p className='error-message'>{props.error}</p> : null}
    </div>
  )
}

DuckDetails.propTypes = {
  authedUser: PropTypes.object.isRequired,
  duckId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  addAndHandleReply: PropTypes.func.isRequired,
}

export default DuckDetails

import React from 'react'
import PropTypes from 'prop-types'
import { DuckContainer } from 'container'
import './DuckDetails.css'
import 'sharedStyles/styles.css'

const DuckDetails = (props) => {
  return (
    <div className='main-container'>
      {props.isFetching === true
        ? <p className='sub-header'>{'Fetching'}</p>
        : <div className="container">
            <div className="content">
              <DuckContainer duckId={props.duckId} hideLikeCount={false} hideReplyBtn={true} />
              {"MAKE REPLY"}
            </div>
            <div className="replies-container">
              {"REPLY SECTION"}
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
}

export default DuckDetails

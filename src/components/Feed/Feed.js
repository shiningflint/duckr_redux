import React from 'react'
import PropTypes from 'prop-types'
import { DuckContainer } from 'container'
import './Feed.css'
import 'sharedStyles/styles.css'

const NewDucksAvailable = (props) => {
  return (
    <div className='new-duck-container'>
      {'New Ducks Available'}
    </div>
  )
}

const Feed = (props) => {
  return props.isFetching === true
    ? <h1 className='feed-header'>{'Fetching'}</h1>
    : <div>
        {props.newDucksAvailable ? <NewDucksAvailable handleClick={props.resetNewDucksAvailable} /> : null}
        {props.duckIds.length === 0
          ? <p>{'This is unfortunate.'}<br />{'It appears there are no ducks yet 😞'}</p>
          : props.duckIds.map((id) => <DuckContainer duckId={id} key={id} /> )}
        {props.error ? <p className='error-message'>{props.error}</p> : null}
      </div>
}

Feed.propTypes = {
  duckIds: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  newDucksAvailable: PropTypes.bool.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired,
}

export default Feed

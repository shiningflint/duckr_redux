import React from 'react'
import PropTypes from 'prop-types'
import './User.css'
import { DuckContainer } from 'container'

const User = (props) => {
  return props.noUser === true
    ? <p className='user-header'>{'This user doesnt exist. 👽'}</p>
    : <div>
        {props.isFetching === true
          ? <p className='header'>{'Loading'}</p>
          : <div>
              <div className='user-container'>
                <div>{props.name}</div>
              </div>
              {props.duckIds.map((id) => (
                <DuckContainer duckId={id} key={id} />
              ))}
              {props.duckIds.size === 0
                ? <p className='header'>
                    {`It looks like ${props.name.split(' ')[0]} hasn't made any ducks yet.`}
                  </p>
                : null}
            </div>
          }
        {props.error ? <p className='error-message'>{props.error}</p> : null}
      </div>
}

User.propTypes = {
  noUser: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  duckIds: PropTypes.array.isRequired,
}

export default User

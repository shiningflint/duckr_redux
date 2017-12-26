import React from 'react'
import PropTypes from 'prop-types'
import { formatTimestamp } from 'helpers/utilities'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'
import './Duck.css'

const Duck = (props) => {
  console.log(props)
  const starIcon = props.isLiked === true ? 'liked-icon' : 'icon'
  const starFn = props.isLiked === true ? props.handleDeleteLike : props.addAndHandleLike
  return (
    <div
      className='duck-container'
      style={{cursor: props.hideReplyBtn === true ? 'default' : 'pointer'}}
      onClick={props.onClick}>
        <img src={props.duck.avatar} alt={props.duck.name} className='avatar' />
        <div className='content-container'>
          <div className='header'>
            <div onClick={props.goToProfile} className='author'>{props.duck.name}</div>
            <div>{formatTimestamp(props.duck.timestamp)}</div>
          </div>
          <div className='text'>{props.duck.text}</div>
          <div className='like-reply-container'>
            {props.hideReplyBtn === true
              ? null
              : <Reply className='icon' />}
            <div className='action-container'>
              <Star className={starIcon} onClick={(e) => starFn(props.duck.duckId, e)} />
              {props.hideLikeCount === true ? null : <div>{props.numberOfLikes}</div>}
            </div>
          </div>
        </div>
    </div>
  )
}

Duck.propTypes = {
  duck: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    duckId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    uid: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
  isLiked: PropTypes.bool.isRequired,
  addAndHandleLike: PropTypes.func.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  numberOfLikes: PropTypes.number,
  hideReplyBtn: PropTypes.bool.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  goToProfile: PropTypes.func.isRequired,
}

export default Duck

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Replies } from 'components'

class RepliesContainer extends Component {
  render () {
    return <Replies
      error={'error message here'}
      isFetching={false}
      replies={{
        'thebanana': {
          avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12308672_973918719346282_7898292162723756809_n.jpg?oh=587fcde2c4abbc28cd91fbd95ada5642&oe=5AB2FEAB',
          name: 'Adam Christopher',
          reply: 'This duck is sick!',
          timestamp: Date.now()
        },
        'thepotato': {
          avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12308672_973918719346282_7898292162723756809_n.jpg?oh=587fcde2c4abbc28cd91fbd95ada5642&oe=5AB2FEAB',
          name: 'Adam Widjaja',
          reply: 'It sure is!',
          timestamp: Date.now()
        },
      }} />
  }
}

export default RepliesContainer

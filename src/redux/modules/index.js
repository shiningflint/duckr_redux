import { combineReducers } from 'redux'
import users from './users'
import modal from './modal'
import feed from './feed'
import usersDucks from './usersDucks'
import ducks from './ducks'
import listeners from './listeners'

export default combineReducers({
  users,
  modal,
  feed,
  usersDucks,
  ducks,
  listeners
})

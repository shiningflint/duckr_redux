import { usersDucksExpirationLength, userExpirationLength, repliesExpirationLength } from './constants'

export const formatUserInfo = (name, avatar, uid) => {
  return { name, avatar, uid }
}

export const formatDuck = (text, {name, avatar, uid}) => {
  return {
    text,
    name,
    avatar,
    uid,
    timestamp: Date.now(),
  }
}

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

//Using Redux Cache for 10 minutes, then after 10 minutes refetch
function getMilliseconds (timestamp) {
  return new Date().getTime() - new Date(timestamp).getTime()
}

export function staleDucks (timestamp) {
  return getMilliseconds(timestamp) > usersDucksExpirationLength
}

export function staleUser (timestamp) {
  return getMilliseconds(timestamp) > userExpirationLength
}

export function staleReplies (timestamp) {
  return getMilliseconds(timestamp) > repliesExpirationLength
}

export function formatReply (reply, { name, uid, avatar }) {
  return {
    name,
    reply,
    uid,
    timestamp: Date.now(),
    avatar
  }
}

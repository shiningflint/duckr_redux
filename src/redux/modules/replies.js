const ADD_REPLY = "ADD_REPLY"
const ADD_REPLY_ERROR = "ADD_REPLY_ERROR"
const REMOVE_REPLY = "REMOVE_REPLY"
const FETCHING_REPLIES = "FETCHING_REPLIES"
const FETCHING_REPLIES_ERROR = "FETCHING_REPLIES_ERROR"
const FETCHING_REPLIES_SUCCESS = "FETCHING_REPLIES_SUCCESS"

// function addReply() {
//   return {
//     type: ADD_REPLY,
//     duckId,
//     reply,
//   }
// }
//
// function addReplyError() {
//   return {
//     type: ADD_REPLY_ERROR,
//     error: 'Error adding reply',
//   }
// }
//
// function removeReply() {
//   return {
//     type: REMOVE_REPLY,
//     replyId,
//     duckId,
//   }
// }
//
// function fetchingReplies() {
//   return {
//     type: FETCHING_REPLIES,
//   }
// }
//
// function fetchingRepliesError() {
//   return {
//     type: FETCHING_REPLIES_ERROR,
//     error: 'Error fetching replies',
//   }
// }
//
// function fetchingRepliesSuccess() {
//   return {
//     type: FETCHING_REPLIES_SUCCESS,
//     replies,
//     duckId,
//     lastUpdated: Date.now(),
//   }
// }

export function addAndHandleReply() {
  return (dispatch) => {
    return {}
  }
}

const initialReply = {
  name: '',
  reply: '',
  uid: '',
  timestamp: 0,
  avatar: '',
  replyId: ''
}

function duckReplies (state = initialReply, action) {
  switch (action.type) {
    case ADD_REPLY :
      return {
        ...state,
        [action.reply.replyId]: action.reply,
      }
    case REMOVE_REPLY :
      return {
        ...state,
        [action.reply.replyId]: undefined,
      }
    default:
      return state
  }
}
const initialDuckState = {
  lastUpdated: Date.now(),
  replies: {}
}

function repliesAndLastUpdated(state = initialDuckState, action) {
  switch (action.type) {
    case FETCHING_REPLIES_SUCCESS :
      return {
        ...state,
        lastUpdated: action.lastUpdated,
        replies: action.replies,
      }
    case ADD_REPLY :
    case REMOVE_REPLY :
      return {
        ...state,
        replies: duckReplies(state[action.replies], action),
      }
    default:
      return state;
  }
}

const initialState = {
  isFetching: true,
  error: '',
}

export default function replies(state = initialState, action) {
  switch (action.type) {
    case ADD_REPLY :
      return {
        ...state,
        [action.duckId]: {
          lastUpdated: action.timestamp,
          replies: {
            [action.replyId]: {
              reply: action.reply,
            }
          }
        }
      }
    case REMOVE_REPLY :
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.duckId]: repliesAndLastUpdated(state[action.duckId], action),
      }
    case FETCHING_REPLIES :
      return {
        ...state,
        isFetching: true,
      }
    case ADD_REPLY_ERROR :
    case FETCHING_REPLIES_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_REPLIES_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
      }
    default:
      return state;
  }
}

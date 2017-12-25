export const ADD_LIKE = "ADD_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"
const FETCHING_LIKES = "FETCHING_LIKES"
const FETCHING_LIKES_ERROR = "FETCHING_LIKES_ERROR"
const FETCHING_LIKES_SUCCESS = "FETCHING_LIKES_SUCCESS"

// function addLike(duckId) {
//   return {
//     type: ADD_LIKE,
//     duckId,
//   }
// }
//
// function removeLike(duckId) {
//   return {
//     type: REMOVE_LIKE,
//     duckId,
//   }
// }
//
// function fetchingLikes() {
//   return {
//     type: FETCHING_LIKES,
//   }
// }
//
// function fetchingLikesError() {
//   return {
//     type: FETCHING_LIKES_ERROR,
//     error: 'Error fetching likes',
//   }
// }
//
// function fetchingLikesSuccess(likes) {
//   return {
//     type: FETCHING_LIKES_SUCCESS,
//     likes,
//   }
// }

const initialState = {
  isFetching: false,
  error: '',
}

export default function usersLikes(state = initialState, action) {
  switch (action.type) {
    case ADD_LIKE :
      return {
        ...state,
        [action.duckId]: true,
      }
    case REMOVE_LIKE :
      // Can I just find the frikkin duckid and set it to false?
      // NO! Because that will MUTATE the state. Redux state is IMMUTABLE
      // Use filter & reduce for returning the new array with the removed duck
      return {
        ...state,
        duckId: Object.keys(state)
          .filter((duckId) => action.duckId !== duckId)
          .reduce((prev, current) => {
            prev[current] = state[current];
            return prev;
          }),
      }
    case FETCHING_LIKES :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_LIKES_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_LIKES_SUCCESS :
      return {
        ...state,
        ...action.likes,
        isFetching: false,
        error: '',
      }
    default:
      return state;
  }
}
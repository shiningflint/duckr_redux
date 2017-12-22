const SETTING_FEED_LISTENER = "SETTING_FEED_LISTENER"
const SETTING_FEED_LISTENER_ERROR = "SETTING_FEED_LISTENER_ERROR"
const SETTING_FEED_LISTENER_SUCCESS = "SETTING_FEED_LISTENER_SUCCESS"
const ADD_NEW_DUCK_ID_TO_FEED = "ADD_NEW_DUCK_ID_TO_FEED"
const RESET_NEW_DUCKS_AVAILABLE = "RESET_NEW_DUCKS_AVAILABLE"


// function settingFeedListener() {
//   return {
//     type: SETTING_FEED_LISTENER,
//   }
// }
//
// function settingFeedListenerError() {
//   return {
//     type: SETTING_FEED_LISTENER_ERROR,
//     error: 'Error fetching feeds.',
//   }
// }
//
// function settingFeedListenerSuccess(duckIds) {
//   return {
//     type: SETTING_FEED_LISTENER_SUCCESS,
//     duckIds,
//   }
// }
//
// function AddNewDuckIdToFeed(duckId) {
//   return {
//     type: ADD_NEW_DUCK_ID_TO_FEED,
//     duckId,
//   }
// }
//
// function ResetNewDucksAvailable() {
//   return {
//     type: RESET_NEW_DUCKS_AVAILABLE,
//   }
// }


const initialState = {
  isFetching: false,
  error: '',
  newDucksAvailable: false,
  duckIdsToAdd: [],
}

export default function feed(state = initialState, action) {
  switch (action.type) {
    case SETTING_FEED_LISTENER :
      return {
        ...state,
        isFetching: true,
      }
    case SETTING_FEED_LISTENER_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case SETTING_FEED_LISTENER_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        dickIds: action.duckIds,
        newDucksAvailable: false,
      }
    case ADD_NEW_DUCK_ID_TO_FEED :
      return {
        ...state,
        duckIdsToAdd: [action.duckId, ...state.duckIdsToAdd]
      }
    case RESET_NEW_DUCKS_AVAILABLE :
      return {
        ...state,
        duckIds: [...state.duckIdsToAdd, ...state.duckIds],
        duckIdsToAdd: [],
        newDucksAvailable: false,
      }
    default:
      return state;
  }
}

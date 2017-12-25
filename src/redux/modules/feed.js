import { addListener } from './listeners'
import { addMultipleDucks } from './ducks'
import { listenToFeed } from 'helpers/api'

const SETTING_FEED_LISTENER = "SETTING_FEED_LISTENER"
const SETTING_FEED_LISTENER_ERROR = "SETTING_FEED_LISTENER_ERROR"
const SETTING_FEED_LISTENER_SUCCESS = "SETTING_FEED_LISTENER_SUCCESS"
const ADD_NEW_DUCK_ID_TO_FEED = "ADD_NEW_DUCK_ID_TO_FEED"
const RESET_NEW_DUCKS_AVAILABLE = "RESET_NEW_DUCKS_AVAILABLE"


function settingFeedListener() {
  return {
    type: SETTING_FEED_LISTENER,
  }
}

function settingFeedListenerError() {
  return {
    type: SETTING_FEED_LISTENER_ERROR,
    error: 'Error fetching feeds.',
  }
}

function settingFeedListenerSuccess(duckIds) {
  return {
    type: SETTING_FEED_LISTENER_SUCCESS,
    duckIds,
  }
}

function addNewDuckIdToFeed(duckId) {
  return {
    type: ADD_NEW_DUCK_ID_TO_FEED,
    duckId,
  }
}

export function resetNewDucksAvailable() {
  return {
    type: RESET_NEW_DUCKS_AVAILABLE,
  }
}

export function setAndHandleFeedListener() {
  let initialFetch = true
  //redux thunk not only gets dispatch but also getState
  return function(dispatch, getState) {
    //if listener is present, do not set listener
    if (getState().listeners.feed === true) { return }

    dispatch(addListener('feed'))
    dispatch(settingFeedListener())

    listenToFeed(({feed, sortedIds}) => {
      dispatch(addMultipleDucks(feed))
      initialFetch === true
        ? dispatch(settingFeedListenerSuccess(sortedIds))
        : dispatch(addNewDuckIdToFeed(sortedIds[0]))
      initialFetch = false
    }, (error) => dispatch(settingFeedListenerError(error)))
  }
}

const initialState = {
  isFetching: false,
  error: '',
  newDucksAvailable: false,
  duckIdsToAdd: [],
  duckIds: [],
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
        duckIds: action.duckIds,
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

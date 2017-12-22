import { saveDuck } from 'helpers/api'
import { closeModal } from './modal'
import { addSingleUsersDuck } from './usersDucks'

const FETCHING_DUCK = "FETCHING_DUCK"
const FETCHING_DUCK_ERROR = "FETCHING_DUCK_ERROR"
const FETCHING_DUCK_SUCCESS = "FETCHING_DUCK_SUCCESS"
const REMOVE_FETCHING = "REMOVE_FETCHING"
const ADD_DUCK = "ADD_DUCK"
const ADD_MULTIPLE_DUCKS = "ADD_MULTIPLE_DUCKS"

//Actions
// function fetchingDuck() {
//   return {
//     type: FETCHING_DUCK,
//   }
// }
//
// function fetchingDuckError() {
//   return {
//     type: FETCHING_DUCK_ERROR,
//     error: 'Error fetching Duck',
//   }
// }
//
// function fetchingDuckSuccess(duck) {
//   return {
//     type: FETCHING_DUCK_SUCCESS,
//     duck,
//   }
// }
//
// function removeFetching() {
//   return {
//     type: REMOVE_FETCHING,
//   }
// }
//
function addDuck(duck) {
  return {
    type: ADD_DUCK,
    duck,
  }
}

export function addMultipleDucks(ducks) {
  return {
    type: ADD_MULTIPLE_DUCKS,
    ducks,
  }
}

export function duckFanout(duck) {
  return function(dispatch, getState) {
    const uid = getState().users.authedId
    saveDuck(duck)
      .then((duckWithId) => {
        dispatch(addDuck(duckWithId))
        dispatch(closeModal())
        dispatch(addSingleUsersDuck(uid, duckWithId.duckId))
      })
      .catch((error) => {console.warn('Error in duckFanout', error)})
  }
}

//Reducer
const initialState = {
  isFetching: true,
  error: '',
}

export default function ducks(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DUCK :
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_DUCK_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case ADD_DUCK :
    case FETCHING_DUCK_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.duck.duckId]: action.duck,
      }
    case REMOVE_FETCHING :
      return {
        ...state,
        isFetching: false,
        error: '',
      }
    case ADD_MULTIPLE_DUCKS :
      return {
        ...state,
        ...action.ducks
      }

    default:
      return state;
  }
}

const OPEN_MODAL = "OPEN_MODAL"
const CLOSE_MODAL = "CLOSE_MODAL"
const UPDATE_DUCK_TEXT = "UPDATE_DUCK_TEXT"

//Modal
const openModal = () => {
  return {
    type: OPEN_MODAL,
  }
}

const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

// const updateDuckText = () => {
//   return {
//     type: UPDATE_DUCK_TEXT,
//     newDuckText,
//   }
// }


const initialState = {
  isOpen: false
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL :
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_MODAL :
      return {
        ...state,
        isOpen: false,
      }
    case UPDATE_DUCK_TEXT :
      return {
        ...state,
        duck: action.newDuckText,
      }
    default:
      return state
  }
}

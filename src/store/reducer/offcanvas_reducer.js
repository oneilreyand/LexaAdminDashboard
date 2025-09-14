const initialState = {
  isOpen: false,
}

function offcanvasReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_OFFCANVAS':
      return {
        ...state,
        isOpen: true,
      }
    case 'CLOSE_OFFCANVAS':
      return {
        ...state,
        isOpen: false,
      }
    case 'TOGGLE_OFFCANVAS':
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state
  }
}

export default offcanvasReducer

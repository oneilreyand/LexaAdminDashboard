const initialState = {
  messages: [], // Array of { id, message, type, duration, timestamp }
}

function snackbarReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ENQUEUE_SNACKBAR': {
      const newMessage = {
        id: Date.now() + Math.random(),
        message: payload.message,
        type: payload.type || 'info',
        duration: payload.duration || 4000,
        timestamp: Date.now(),
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    }
    case 'REMOVE_SNACKBAR': {
      return {
        ...state,
        messages: state.messages.filter(msg => msg.id !== payload.id),
      }
    }
    case 'CLEAR_ALL_SNACKBARS':
      return {
        ...state,
        messages: [],
      }
    default:
      return state
  }
}

export default snackbarReducer

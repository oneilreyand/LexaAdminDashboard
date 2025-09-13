const initialState = {
  isDarkMode: false
}

function themeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'TOGGLE_DARK_MODE':
      return { 
        ...state, 
        isDarkMode: !state.isDarkMode 
      }
    case 'SET_DARK_MODE':
      return {
        ...state,
        isDarkMode: payload
      }
    default:
      return state
  }
}

export default themeReducer

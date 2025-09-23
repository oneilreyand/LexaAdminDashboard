const initialState = {
  events: [],
  isLoading: false
}

function calendarReducer (state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_DATA_CALENDAR':
      return { ...state, events: payload, isLoading: false }
    default:
      return state
  }
}

export default calendarReducer

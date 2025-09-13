const initialState = {
  data: [],
  isLoading: false
}

function Reducer (state = initialState, { type, payload }) {
  switch (type) {
    case 'TEST_REDUX':
      return { ...state, isLoading: payload }
    case 'FETCH_SOME_DATA':
      return { ...state, data: payload }
    default:
      return state
  }
}

export default Reducer

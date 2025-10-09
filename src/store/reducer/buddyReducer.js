import { SET_BUDDIES } from '../action/buddyActions';

const initialState = {
  buddies: [],
};

const buddyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUDDIES:
      return {
        ...state,
        buddies: action.payload,
      };
    default:
      return state;
  }
};

export default buddyReducer;

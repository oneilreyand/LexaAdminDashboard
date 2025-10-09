import { SET_COURSE_VIDEOS } from '../action/courseVideos';

const initialState = {
  videos: [],
};

const courseVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    default:
      return state;
  }
};

export default courseVideosReducer;

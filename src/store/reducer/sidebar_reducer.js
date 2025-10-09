const initialState = {
  isOpen: false,
  isCollapsed: true, // Track collapsed state for desktop
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIDEBAR_TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case 'SIDEBAR_OPEN':
      return {
        ...state,
        isOpen: true,
      };
    case 'SIDEBAR_CLOSE':
      return {
        ...state,
        isOpen: false,
      };
    case 'SIDEBAR_SET_COLLAPSED':
      return {
        ...state,
        isCollapsed: action.payload,
      };
    case 'SIDEBAR_TOGGLE_COLLAPSED':
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      };
    default:
      return state;
  }
};

export default sidebarReducer;

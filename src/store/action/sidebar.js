// Sidebar actions
export const toggleSidebar = () => ({
  type: 'SIDEBAR_TOGGLE',
});

export const openSidebar = () => ({
  type: 'SIDEBAR_OPEN',
});

export const closeSidebar = () => ({
  type: 'SIDEBAR_CLOSE',
});

export const setSidebarCollapsed = (isCollapsed) => ({
  type: 'SIDEBAR_SET_COLLAPSED',
  payload: isCollapsed,
});

export const toggleSidebarCollapsed = () => ({
  type: 'SIDEBAR_TOGGLE_COLLAPSED',
});

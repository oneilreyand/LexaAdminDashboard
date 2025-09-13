export const enqueueSnackbar = (message, type = 'info', duration = 4000) => ({
  type: 'ENQUEUE_SNACKBAR',
  payload: { message, type, duration },
})

export const removeSnackbar = (id) => ({
  type: 'REMOVE_SNACKBAR',
  payload: { id },
})

export const clearAllSnackbars = () => ({
  type: 'CLEAR_ALL_SNACKBARS',
})

// Legacy support
export const showSnackbar = enqueueSnackbar
export const hideSnackbar = clearAllSnackbars

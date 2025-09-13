import { useDispatch } from 'react-redux'
import { enqueueSnackbar } from '../store/action/snackbar'

const useSnackbar = () => {
  const dispatch = useDispatch()

  const showMessage = (message, type = 'info', duration = 4000) => {
    console.log(`Snackbar triggered: ${type} - "${message}"`)
    dispatch(enqueueSnackbar(message, type, duration))
  }

  const showSuccess = (message, duration = 4000) => {
    showMessage(message, 'success', duration)
  }

  const showError = (message, duration = 4000) => {
    showMessage(message, 'error', duration)
  }

  const showWarning = (message, duration = 4000) => {
    showMessage(message, 'warning', duration)
  }

  const showInfo = (message, duration = 4000) => {
    showMessage(message, 'info', duration)
  }

  return {
    showMessage,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }
}

export default useSnackbar

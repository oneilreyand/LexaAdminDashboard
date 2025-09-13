import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeSnackbar } from '../../store/action/snackbar'
import { CheckCircle, XCircle, AlertTriangle, Info, HelpCircle } from 'lucide-react'

const Snackbar = () => {
  const { messages } = useSelector(state => state.snackbar)
  const dispatch = useDispatch()
  const [fadingOut, setFadingOut] = useState(new Set())

  const getTypeStyles = (type) => {
    switch (type) {
      case 'success':
        return 'bg-snackbar-success text-white'
      case 'error':
        return 'bg-snackbar-error text-white'
      case 'warning':
        return 'bg-snackbar-warning text-white'
      case 'question':
        return 'bg-snackbar-question text-white'
      case 'info':
      default:
        return 'bg-snackbar-info text-white'
    }
  }

  const getIconColor = (type) => {
    switch (type) {
      case 'success':
        return 'text-snackbar-success'
      case 'error':
        return 'text-snackbar-error'
      case 'warning':
        return 'text-snackbar-warning'
      case 'question':
        return 'text-snackbar-question'
      case 'info':
      default:
        return 'text-snackbar-info'
    }
  }

  // Auto-hide each message individually with fade-out animation
  useEffect(() => {
    const timers = []
    
    messages.forEach((message) => {
      const timer = setTimeout(() => {
        // Start fade-out animation
        setFadingOut(prev => new Set([...prev, message.id]))

        // Remove from DOM after animation completes
        const removeTimer = setTimeout(() => {
          dispatch(removeSnackbar(message.id))
          setFadingOut(prev => {
            const newSet = new Set(prev)
            newSet.delete(message.id)
            return newSet
          })
        }, 300) // Match fadeOut animation duration
        
        timers.push(removeTimer)
      }, message.duration)
      
      timers.push(timer)
    })

    // Cleanup function to clear all timers
    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [messages, dispatch])

  if (messages.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 max-h-[calc(100vh-2rem)] overflow-y-auto snackbar-scroll-container">
      <div className="space-y-2">
        {messages.map((message) => {
          return (
            <div
              key={message.id}
              className={`transition-all duration-500 ease-in-out transform translate-y-0 opacity-100 ${
                fadingOut.has(message.id) ? 'animate-fade-out' : 'animate-fade-in'
              }`}
            >
              <div
                className={`px-4 py-3 rounded-lg shadow-md ${getTypeStyles(message.type)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ${getIconColor(message.type)}`}>
                      {message.type === 'success' && <CheckCircle className="w-4 h-4" />}
                      {message.type === 'error' && <XCircle className="w-4 h-4" />}
                      {message.type === 'warning' && <AlertTriangle className="w-4 h-4" />}
                      {message.type === 'info' && <Info className="w-4 h-4" />}
                      {message.type === 'question' && <HelpCircle className="w-4 h-4" />}
                    </span>
                    <span className="text-sm font-medium">{message.message}</span>
                  </div>
                  <button
                    onClick={() => {
                      // Start fade-out animation
                      setFadingOut(prev => new Set([...prev, message.id]))

                      // Remove from DOM after animation completes
                      setTimeout(() => {
                        dispatch(removeSnackbar(message.id))
                        setFadingOut(prev => {
                          const newSet = new Set(prev)
                          newSet.delete(message.id)
                          return newSet
                        })
                      }, 300)
                    }}
                    className="ml-4 text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Snackbar
